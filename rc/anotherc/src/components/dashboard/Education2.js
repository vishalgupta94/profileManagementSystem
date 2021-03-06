import React,{Fragment} from 'react';
import {connect} from 'react-redux';


const Education = ({education})=>{
	console.log("education retrieved ",education)
	const educations =education.map(edu=>(
          <tr key={edu._id}>
             <td>{edu.school}</td>
             <td>{edu.degree}</td>
             <td>{edu.from}</td>
             </tr>
		));

	return (
		<Fragment>
		      <h2>education</h2>
		      <table className="ui celled table">
		        <thead>
                      <tr>
		                  <th>school</th>
		                  <th>degree</th>
		                  <th>Years</th>
		                  <th/ >
                      </tr>
                 </thead>
                 <tbody>{educations}</tbody>
		      </table>
		</Fragment>);
}

export default Education;


/*

	//<td><Moment  format="YYYY/MM/DD">{exp.from}</Moment></td>
*/