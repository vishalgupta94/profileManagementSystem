import React from 'react';

//import {connect} from 'react-redux';
//import {Spinner} from '../Spinner';
//import {getProfiles} from '../../actions/profile';
import {Link} from 'react-router-dom';
const ProfilesItem = ({ profile }) => {
    const {
        user: { _id, name },
        status,
        company,
        location,
        skills
    }=profile;

    console.log(profile);

    return (<div> 
		        <h2>{name}</h2>
		        <p>Status {status} {company&& <span>{company}</span>}</p>
		       	<p> {location&& <span>{location}</span>}</p>
                <p> {skills&& <span>{skills}</span>}</p>
		        <Link to={`/profile/${_id}`}>View Profile</Link> 
		    </div>)
}


// const mapStateToProps= (state)=>{
//    return  {profile:state.profile}
// }


export default ProfilesItem; //onnect(mapStateToProps,{getProfiles})();