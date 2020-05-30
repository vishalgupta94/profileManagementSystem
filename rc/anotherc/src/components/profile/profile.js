import React,{Fragment,useEffect} from 'react';
import {connect} from 'react-redux';
import {Spinner} from '../Spinner';
import {getProfileById} from '../../actions/profile';
import {Link} from 'react-router-dom';
import ProfileTop from './ProfileTop';

const Profile= ({getProfileById,profile:{profile,loading},auth,match})=>{

	useEffect(()=>{
		getProfileById(match.params.id)
	},[getProfileById]);

	return (
		<div>
          { profile===null||loading ? <Spinner />:
            <Fragment><Link to="/profiles">Back to profiles </Link>
             <ProfileTop profile={profile} />
             </Fragment>
          }
		</div>)
}

const mapStateToProps =(state)=>{
	return {
		profile:state.profile,
		auth: state.auth
	}
}
export default connect(mapStateToProps,{getProfileById})(Profile);