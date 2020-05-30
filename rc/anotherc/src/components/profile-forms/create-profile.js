import React, { useState,Fragment } from 'react';
import { connect } from 'react-redux';
import {createProfile} from '../../actions/profile';
import {Link,withRouter} from 'react-router-dom';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        bio: '',
        status: '',
        githubusername: '',
        skills: '',
        youtube: '',
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: ''
    })

    const [displaySocial,toogleDisplaySocial]= useState('false');

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = formData;

     const onChange=(e)=>{
             setFormData({...formData,[e.target.name]:e.target.value});
     }

     const onSubmit=(e)=>{
             e.preventDefault();
             console.log("CREATE PROFILE SUBMITTED");
             props.createProfile(formData,props.history);
       }

    return (
        <Fragment>
			 <form className="ui form" onSubmit={(e)=>onSubmit(e)}>
			   <p>Create ypur profile</p>
			   <p>Lets get some information here to make your profile stand out</p>
				  <div className="field">
					    <select name="status" value={status} onChange={(e)=>onChange(e)}  >
	                         <option value="0">Select Profession status</option>
	                         <option value="Developer">Developer</option>
	                         <option value="Junior Developer">Junior Developer</option>
	                    </select>
				  </div>
                  <div className="field">
                      <label>Company</label>
                      <input 
                         type="text"
                         name="company"
                         placeholder="company"
                         value={company} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>
                  <div className="field">
                      <label>Website</label>
                      <input 
                         type="text"
                         name="website"
                         placeholder="website"
                         value={website} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>
                  <div className="field">
                      <label>Location</label>
                      <input 
                         type="text"
                         name="location"
                         placeholder="location"
                         value={location} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>
                  <div className="field">
                      <label>Bio</label>
                      <input 
                         type="text"
                         name="bio"
                         placeholder="bio"
                         value={bio} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>
                  <div className="field">
                      <label>skills</label>
                      <input 
                         type="text"
                         name="skills"
                         value={skills}
                         placeholder="skills"
                         onChange={(e)=>onChange(e)}
                         />
                       <p>Please provide skills , wise</p>  
                  </div>
                  <div className="field">
                      <label>githubusername</label>
                      <input 
                         type="text"
                         name="githubusername"
                         placeholder="githubusername"
                         value={githubusername} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>
                  <div className="field">
                      <label>status</label>
                      <input 
                         type="text"
                         name="status"
                         placeholder="status"
                         value={status} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>

                  <button onClick={()=>toogleDisplaySocial(!displaySocial) }>
                  Add Social Links
                  </button>
                  
                  {displaySocial && <Fragment>
	                  <div className="field">
	                      <label>youtube</label>
	                      <input 
	                         type="text"
	                         name="youtube"
	                         placeholder="youtube"
	                         value={youtube} 
	                         onChange={(e)=>onChange(e)}
	                         />
	                  </div>
	                  <div className="field">
	                      <label>facebook</label>
	                      <input 
	                         type="text"
	                         name="facebook"
	                         placeholder="facebook"
	                         value={facebook} 
	                         onChange={(e)=>onChange(e)}
	                         />
	                  </div>
	                  <div className="field">
	                      <label>instagram</label>
	                      <input 
	                         type="text"
	                         name="instagram"
	                         placeholder="instagram"
	                         value={instagram} 
	                         onChange={(e)=>onChange(e)}
	                         />
	                  </div>
	                  <div className="field">
	                      <label>twitter</label>
	                      <input 
	                         type="text"
	                         name="twitter"
	                         placeholder="twitter"
	                         value={twitter} 
	                         onChange={(e)=>onChange(e)}
	                         />
	                  </div>	                  
	                  <div className="field">
	                      <label>linkedin</label>
	                      <input 
	                         type="text"
	                         name="linkedin"
	                         placeholder="linkedin"
	                         value={linkedin} 
	                         onChange={(e)=>onChange(e)}
	                         />
	                  </div>                   	
                  </Fragment>}
                                                                                                                                                
                  <button className="ui button"  
                          type="submit"
                          >Submit
                  </button>

                  <Link className="ui Link"  to="/dashboard"
                          >GoBack
                  </Link>

			 </form>
		</Fragment>
		)
}



export default connect(null,{createProfile})(withRouter(CreateProfile));