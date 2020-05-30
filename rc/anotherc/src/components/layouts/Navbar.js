import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated,loading},logout })=>{

    const authLinks = (
        <Fragment>
        <Link className="item" to="/posts" >Posts</Link>
          <Link className="item" to="/profiles" >Profiles</Link>
         <Link className="item" to="/dashboard" >Dashboard</Link>
    	 <a  onClick={()=>logout()} href="/" className="item">Logout</a>
         </Fragment>
         );
          
    const guestLinks= (
    	<Fragment>
           <Link className="item" to="/profiles" >Profiles</Link>
    	 <Link className="item" to="/register" >Register</Link>
         <Link className="item" to="/login" >Login</Link>
        </Fragment> 
    	);

	return (<div className="ui inverted menu">
                <Link className="item" onClick={()=>logout()} to="/" >Developer</Link>
       {!loading ? <Fragment>{isAuthenticated?authLinks:guestLinks}</Fragment> :null }
            </div>
		);
}

const mapStateToProps =(state)=>{
  return {auth: state.auth} 
}


export default connect(mapStateToProps,{logout})(Navbar);