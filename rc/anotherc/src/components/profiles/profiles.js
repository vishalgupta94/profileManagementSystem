import React,{Fragment,useEffect} from 'react';

import {connect} from 'react-redux';
import {Spinner} from '../Spinner';
import {getProfiles} from '../../actions/profile';
import ProfileItem from './profile-item';

const Profiles = ({getProfiles,profile:{profiles,loading}}) =>{

    useEffect(()=>{
          getProfiles()
    },[getProfiles])

	return (<Fragment>
		          {loading ? <Spinner />: 
		          	   <Fragment>
		          		     <h2>Developer</h2>
		          		     <div>
		          		     {
		          		     	profiles.length>0 ? 
		          		     	  (
                                    profiles.map(profile => (
                                     <ProfileItem key={profile._id} profile={profile} />
                                    	))  
 
		          		     	  	): <h4>No profiles found</h4>
		          		     }
		          		     </div>
		          	   </Fragment>}
        	</Fragment>)
}


const mapStateToProps= (state)=>{
   return  {profile:state.profile}
}
export default connect(mapStateToProps,{getProfiles})(Profiles);