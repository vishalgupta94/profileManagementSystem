import React, { useState } from 'react';

import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

const Login = (props) => {
  console.log("render useS");
    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    const onSubmit=(e)=>{
      e.preventDefault();
      console.log('form submitted login',formData);  
      props.login(formData);
    }

    if(props.isAuthenticated){
       return <Redirect to="/dashboard" />
    }
    
    const {  email, password } = formData;
    const onChange = (e) => {
        let obj = {}
        var a = e.target.name
        obj[a] = e.target.value;
        //console.log("hhhhh", e.target.name, e.target.value,obj);
        setformData(()=>Object.assign({},formData, obj));
        //console.log(formData);
    }



    return (<div className="ui segment">
                 <h1>Login</h1>
                 <p>Sign in Your account</p>
                 <form className="ui form" onSubmit={(e)=>onSubmit(e)}>


                  <div className="field">
                      <label>Email</label>
                      <input 
                           type="email"
                           name="email"
                           required 
                           placeholder="Email"
                           value={email}
                           onChange={(e)=>onChange(e)}
                         />
                  </div>

                  <div className="field">
                      <label>Password</label>
                      <input 
                         type="password"
                         name="password"
                           required
                           placeholder="Password"
                           value={password} 
                           onChange={(e)=>onChange(e)}
                         />
                  </div>
                          
                  <button className="ui button"  
                          type="submit"
                          onSubmit={(e)=>this.onSubmit(e)}
                          >Submit
                  </button>
                          

                 </form>
                 <div>
                     Dont have an account
                     <Link to="/register" >Sign Up</Link>
                 </div>
             </div>);
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login);