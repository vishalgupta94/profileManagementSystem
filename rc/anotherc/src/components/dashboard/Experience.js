import React,{Fragment} from 'react';
import {connect} from 'react-redux';

import {deleteExperience} from '../../actions/profile';


const Experience = ({experience,deleteExperience})=>{
	console.log("experience retrieved ",experience)
	const experiences =experience.map(exp=>(
          <tr key={exp._id}>
             <td>{exp.company}</td>
             <td>{exp.title}</td>
             <td>{exp.from}</td>
             <td>  <button onClick={()=>deleteExperience(exp._id)} >Delete</button></td>
          </tr>
		));

	return (
		<Fragment>
		      <h2>Experice</h2>
		      <table className="ui celled table">
		        <thead>
                      <tr>
		                  <th>Company</th>
		                  <th>Title</th>
		                  <th>Years</th>
		                  <th/ >
                      </tr>
                 </thead>
                 <tbody>{experiences}</tbody>
		      </table>
		</Fragment>);
}

export default connect(null,{deleteExperience})(Experience)


/*

	//<td><Moment  format="YYYY/MM/DD">{exp.from}</Moment></td>
*/