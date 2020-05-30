import axios from 'axios';
import {setAlert} from './alert';

import {
	GET_POSTS,
	POST_ERROR,
   UPDATE_LIKES
}  from './types';



export const getPosts = ()=> async dispatch =>{
	try{
         const res= await axios.get("/api/posts");
         console.log("get all posts",res.data);
         dispatch({
         	type: GET_POSTS,
         	payload: res.data
         })
        

	}catch(err){

         dispatch({
         	type: POST_ERROR,
         	payload: {msg:err.response.statusText,status:err.response.status}
         })
        
	}
}


export const addLike = (id)=> async dispatch =>{
   
   try{
         const res= await axios.put(`/api/posts/like/${id}`);
         console.log("like posts called",id,res.data);

         dispatch({
            type: UPDATE_LIKES,
            payload: {id,likes:res.data}
         })
        

   }catch(err){
          console.log("like failed",err);

         dispatch({
            type: POST_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
         })
        
   }
}

export const removeLike = (id)=> async dispatch =>{
   
   try{
         const res= await axios.put(`/api/posts/unlike/${id}`);
         console.log("unlike posts called",id,res.data);

         dispatch({
            type: UPDATE_LIKES,
            payload: {id,likes:res.data}
         })
        

   }catch(err){
         console.log("remove like failed",err);
         dispatch({
            type: POST_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
         })
        
   }
}

