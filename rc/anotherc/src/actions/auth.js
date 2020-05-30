import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
LOGIN_SUCCESS, LOGIN_FAIL ,LOGOUT,CLEAR_PROFILE} from '../actions/types';


import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';


export const loadUser = () => async dispatch => {
	console.log("LOAD USER CALLED",localStorage.token);
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
    } catch (err) {
        console.log("errors localStorage", err);
    }

    try {
        const res = await axios.get("/api/auth");
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (e2) {
        console.log("AUTH ERROR",e2);
        dispatch({
            type: AUTH_ERROR
        })
    }
}



export const register = (formData) => async dispatch => {
    console.log("register aaction called", formData);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify(formData);
    try {
        console.log("body", body);
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        console.log("errors", err);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        console.log("error register fail", err);
        dispatch({
            type: REGISTER_FAIL
        })
    }
}



export const login = ({email,password}) => async dispatch => {
    console.log("login called", {email,password});
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email,password});
    try {
        console.log("body", body);
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        console.log("res.data.payload.token",res.data);
        dispatch(loadUser());        
    } catch (err) {
        console.log("errors", err);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        console.log("error register fail", err);
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () =>dispatch => {
    console.log("logout called");
    dispatch({type:LOGOUT})
    dispatch({type:CLEAR_PROFILE})
}