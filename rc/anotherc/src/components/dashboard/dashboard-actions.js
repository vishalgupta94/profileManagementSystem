import React from 'react';

import {Link} from 'react-router-dom';


const DashboardActions= () =>{


	return (
     <div className="ui menu">
      <Link className="item" to="/edit-profile" >Edit profile</Link>
      <Link className="item" to="/add-experience" >Add Experience</Link>
      <Link className="item" to="/add-education" >Add Education</Link>

     </div>
		)
}

export default DashboardActions;