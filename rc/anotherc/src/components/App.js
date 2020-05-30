import React,{useEffect} from 'react';
import Navbar from './layouts/Navbar.js';
import Landing from './layouts/Landing.js';
import Login from './auth/Login.js';
import Register from './auth/Register.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';
import Alert from './layouts/Alert.js';
import Dashboard from './dashboard/dashboard.js';
import {loadUser} from '../actions/auth';
import PrivateRoute from './routing/PrivateRouting';
import CreateProfile from './profile-forms/create-profile';
import EditProfile from './profile-forms/EditProfile';
import AddExperience from './profile-forms/AddExperience';
import AddEducation from './profile-forms/AddEducation';
import Profiles from './profiles/profiles';
import Profile from './profile/profile';
import Posts from './posts/posts';
const notFound=()=>{
	return (<div>
	   Not Found 
	</div>);

}


const App = ()=>{

     useEffect(()=>{
          console.log("here");
          store.dispatch(loadUser())
     },[])
     return (
          <Provider store={store}>
     	<BrowserRouter className="ui container">
     	   <div className="ui segment">
     	        <Navbar />
     	        <Alert />
                  <div className="ui segment">
                    
     	          <Switch>
     	               <Route path="/" exact component={Landing} />
     	               <Route path="/login" exact component={Login} />
     	               <Route path="/register" exact component={Register} />
                     <Route path="/profiles" exact component={Profiles} />
                     <Route path="/profile/:id" exact component={Profile} />
                         <PrivateRoute path="/dashboard" exact component={Dashboard} />
           <PrivateRoute path="/create-profile" exact component={CreateProfile} />
           <PrivateRoute path="/edit-profile" exact component={EditProfile} /> 
           <PrivateRoute path="/add-experience" exact component={AddExperience} />     
           <PrivateRoute path="/add-education" exact component={AddEducation} /> 
           <PrivateRoute path="/posts" exact component={Posts} />                         
     	               <Route component={notFound} />     	                    	               
     	          </Switch>
          
     	        </div>
           </div>     	    
     	</BrowserRouter>
          </Provider>)
}

export default App;