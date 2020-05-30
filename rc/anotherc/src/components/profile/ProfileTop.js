import React from 'react';
import Education2 from '../dashboard/Education2';
import Experience2 from '../dashboard/Experience2';


const ProfileTop = ({profile:{
	status,
	company,
	location,
	website,
	social,
	education,
	experience,
	user: {name}
}}) => {


    return (<div>
    	ProfileTOp

		<h2>{name}</h2>
        <p>Status {status} {company&& <span>{company}</span>}</p>
       	<p> {location&& <span>{location}</span>}</p>
        <p> {website&& <span>{website}</span>}</p>
        <p> {social&& social.youtube&& <a href={social.youtube}>{social.youtube}</a>}</p>
   <p> {social&& social.instagram&& <a href={social.instagram}>{social.instagram}</a>}</p>
   <p> {social&& social.facebook&& <a href={social.youtube}>{social.youtube}</a>}</p>
   <p> {social&& social.linkedin&& <a href={social.linkedin}>{social.linkedin}</a>}</p>
         education.length>0  && <Education2 education={education} /> 
         experience.length>0  &&<Experience2 experience={experience} />                
    	</div>
        );
};


export default ProfileTop;
