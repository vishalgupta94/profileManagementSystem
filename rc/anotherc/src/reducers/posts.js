import React from 'react';
import {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES
} from '../actions/types';

const intialState={
	posts:[],
	post:null,
	loading:true,
	error:{}
}



export default function(state=intialState,action){
	const {type,payload}=action;

	switch(type){
		case GET_POSTS:
		console.log(" GET POSTS CALLLED",action.payload);
		  return {
		  	...state,
		  	posts:action.payload,
		  	loading:false
		  }
		case POST_ERROR:
		  console.log("POSTS ERROR CALLLED",action.payload);
		  return {
		  	...state,
		  	error:action.payload,
		  	loading:false
		  } 
		case UPDATE_LIKES:
		  console.log("update likes",action.payload,state.posts)
		  return {
		  	...state,
posts: state.posts.map(post=>post._id===payload.id ? {...post,likes:payload.likes} :post),
loading:false
		  }  
		default:
		  return state;   
	}
}

