import axios from 'axios';


const setAuthToken= token =>{
	console.log("setAuthToken",token);
	if(token){
          axios.defaults.headers.common['x-auth-token']=token;
	}else{
		console.log("ran");
          delete axios.defaults.headers.common['x-auth-token'];
	 }
}

export default setAuthToken;