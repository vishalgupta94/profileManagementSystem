import axios from 'axios';
//simport {setAlert} from './alert';

import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    GET_ALL_PROFILES,
    CLEAR_PROFILE,
    GET_REPOS
} from './types';

export const getCurrentProfile = () => async dispatch => {
    console.log("getCurrentProfile");
    try {
        const res = await axios.get("/api/profile/me")
        console.log("getCurrentProfile res", res);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
        console.log("current profile not found PROFILE_ERROR fired");
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.msg, status: err.response.status }
        })
    }
}

export const createProfile = (formData, history, edit = false) => async dispatch => {
    console.log("CreateProfilecalled")
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //const body = JSON.stringify(formData); 
        const res = await axios.post("/api/profile", formData, config);
        console.log("MAIN PROFILE DATA", res.data);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(setAlert(edit ? 'profile updated' : 'profile created'));
        if (!edit) {
            history.push('/dashboard');
        }

    } catch (err) {

        console.log("errors white creating profile profileerror", err);
        const errors = err.response.data.errors || null;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.msg, status: err.response.status }
        })

    }
}



export const addExperience = (formData, history) => async dispatch => {
    console.log("add expereice added");
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //const body = JSON.stringify(formData); 
        const res = await axios.put("/api/profile/experience", formData, config);
        console.log("add experience response", res.data);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('experience added', 'does not matter'));
        history.push('/dashboard');


    } catch (err) {

        console.log("errors white creating profile profileerror", err);
        const errors = err.response.data.errors || null;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.msg, status: err.response.status }
        })

    }




}


export const addEducation = (formData, history) => async dispatch => {
    console.log("add expereice added");
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        //const body = JSON.stringify(formData); 
        const res = await axios.put("/api/profile/education", formData, config);
        console.log("add education response", res.data);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert('eduction added', 'does not matter'));
        history.push('/dashboard');


    } catch (err) {

        console.log("errors white creating profile profileerror", err);
        const errors = err.response.data.errors || null;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.msg, status: err.response.status }
        })

    }




}

export const deleteExperience = id => async dispatch =>{

 console.log("delete experience caled",id);

    try{

        const res=await axios.delete(`/api/profile/experience/${id}`);
        console.log("delete experience",res.data);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

       //dispatch(setAlert('exxpereience  deleted', 'does not matter'));

    }catch(err){
         console.log("error deleeting experience",err);

         dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
         })

    }
}


export const deleteEducation = id => async dispatch =>{

   console.log("delete Education caled");
    try{

       const res=await axios.delete(`/api/profile/education/${id}`);

       dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
       })

       dispatch(setAlert('education  deleted', 'does not matter'));

    }catch(err){
         
         console.log("error deleeting education",err);

         dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
         })
    }
}


export const getProfiles = () => async dispatch =>{
    console.log(" get all profiles called ");
    dispatch({type:CLEAR_PROFILE})
    try{
         const res= await axios.get("/api/profile");
         console.log("profiles data",res.data);


         dispatch({
            type:GET_ALL_PROFILES,
            payload:res.data
         })


    }catch(err){
         console.log("error getting all profiles",err);
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
}


export const getProfileById = (id) => async dispatch =>{
    console.log(" get  profiles by id called ");
    //dispatch({type:CLEAR_PROFILE})
    try{
         const res= await axios.get(`/api/profile/user/${id}`);
         console.log("profiles data",res.data);


         dispatch({
            type:GET_PROFILE,
            payload:res.data
         })


    }catch(err){
         console.log("error getting  profile by id",err);
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
}


export const getGithubRepo = (githubusername) => async dispatch =>{
    console.log(" get  getGithubRepo by id called ");
    dispatch({type:CLEAR_PROFILE})
    try{
         const res= await axios.get(`/api/profile/githubusername`);
         console.log("getGithubRepo data",res.data);


         dispatch({
            type:GET_REPOS,
            payload:res.data
         })


    }catch(err){
         console.log("error getting  getGithubRepo by id",err);
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
}