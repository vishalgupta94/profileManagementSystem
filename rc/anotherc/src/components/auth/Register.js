import React, { useState } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';

const Register = (props) => {
  //console.log("render useS");
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const onSubmit=(e)=>{
      console.log('password');
      e.preventDefault();
        if(password!==password2){
               console.log('password do not match');
               props.setAlert('password do not match','danger');
        }else{
               console.log('password matach register success');
               props.register({name,email,password}); 
        }
    }
    
    const { name, email, password, password2 } = formData;
    const onChange = (e) => {
        let obj = {}
        var a = e.target.name
        obj[a] = e.target.value;
        //console.log("hhhhh", e.target.name, e.target.value,obj);
        setformData(()=>Object.assign({},formData, obj));
        //console.log(formData);
    }


    if(props.isAuthenticated){
       return <Redirect to="/dashboard" />
    }
    

    return (<div className="ui segment">
                 <h1>Register</h1>
                 <p>Create Your account</p>
                 <form className="ui form" onSubmit={(e)=>onSubmit(e)}>
                  <div className="field">
                      <label>Name</label>
                      <input 
                         type="text"
                         name="name"
                           
                           placeholder="Name"
                           value={name} 
                           onChange={(e)=>onChange(e)}
                         />
                  </div>

                  <div className="field">
                      <label>Email</label>
                      <input 
                           type="email"
                           name="email"
                            
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
                           
                           placeholder="Password"
                           value={password} 
                           onChange={(e)=>onChange(e)}
                         />
                  </div>
                          
                  <div className="field">
                      <label>Confirm Password</label>
                      <input 
                         type="password"
                         name="password2"
                           
                           placeholder="Confirm password"
                           value={password2}
                           onChange={(e)=>onChange(e)} 
                         />
                  </div>

                  <button className="ui button"  
                          type="submit"
                          onSubmit={(e)=>this.onSubmit(e)}
                          >Submit
                  </button>
        <div>
          Register 
          <Link to="/register" >Sign Up</Link>
        </div>                  
             
                 </form>
             </div>);
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,register})(Register);