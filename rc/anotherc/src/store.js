
import {composeWithDevTools} from 'redux-devtools-extension';


import rootReducers from './reducers/index';



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState={};

const middleware=[thunk];

function saveToLocalStorage(state){
	try{
		//const serializedState= JSON.stringify(state); 
		console.log("statestate",state.auth.token)
        localStorage.setItem('token',state.auth.token) 
	}catch(e){
        console.log("some error happened here trying to save localstorage");
	}
}
const store=createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))
//onst store=createStore(rootReducers,applyMiddleware(thunk))

store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store;
