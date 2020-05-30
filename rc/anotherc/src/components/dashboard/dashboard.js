import React,{useEffect,Fragment} from 'react'
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import {Link} from 'react-router-dom';
import {Spinner} from '../Spinner';
import DashboardActions from './dashboard-actions';
import Experience from './Experience';
import Education from './Education';
const Dashboard= ({getCurrentProfile,profile,auth:{user}}) =>{
  console.log("profiledashboard",profile);
  useEffect(()=>{
  	console.log("getCurrentProfile");
      getCurrentProfile();
  },[getCurrentProfile]);
  
return profile.loading && (profile.profile===null)? (<Fragment><Spinner/></Fragment>):
( <Fragment>
      <p>Welcome</p>
      {user&& user.name}
      {  profile.profile !==null ? <Fragment>
        <DashboardActions />
        <Experience experience={profile.profile.experience} />
        <Education education={profile.profile.education} />
        </Fragment>:<Fragment>
        
          <p>Create Profile</p>
          <Link to="/create-profile" className="">Create Profile</Link>

      </Fragment>}
       </Fragment>

  );

 
  
}

const mapStateToProps= (state)=>{

	return {
           auth:state.auth,
           profile:state.profile
	}
};

export default connect(mapStateToProps,{getCurrentProfile})(Dashboard);