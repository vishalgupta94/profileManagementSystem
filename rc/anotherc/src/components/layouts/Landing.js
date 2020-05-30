import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Landing = (props)=>{

	if(props.isAuthenticated){
         return <Redirect to="/dashboard" />
	}
	return (<div>
             <div className="ui center aligned segment">
                <Link className="item" to="/register" >Register</Link>
             </div>
             <div className="ui center aligned segment">
                <Link className="item" to="/login" >Login</Link>
             </div>             
            </div>
		);
}


const mapStateToProps= (state)=>{
	return {isAuthenticated: state.auth.isAuthenticated};
}
export default connect(mapStateToProps)(Landing);