import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import {  withRouter } from 'react-router-dom';

const AddEducation = (props) => {

    const [formData, setFormData] = useState({
        degree: "",
        school: "",
        fieldofstudy: "",
        from: "",
        to: "",
        current: false,
        description: ""
    })


    const [toDateDisable, toggleDisable] = useState(false);


    const { degree, school, fieldofstudy, from, to, current, description } = formData;

    const onSubmit = (e) => {
         e.preventDefault();
         props.addEducation(formData,props.history);
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (<Fragment>
  	        <h2>ADD Education</h2>
  	        <form class="ui form" onSubmit={(e)=>onSubmit(e)}>
  	        	   <div className="field">
                      <label>degree</label>
                      <input 
                         type="text"
                         name="degree"
                         placeholder="degree"
                         value={degree} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div> 
  	        	   <div className="field">
                      <label>school</label>
                      <input 
                         type="text"
                         name="school"
                         placeholder="school"
                         value={school} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>  
  	        	   <div className="field">
                      <label>fieldofstudy</label>
                      <input 
                         type="text"
                         name="fieldofstudy"
                         placeholder="fieldofstudy"
                         value={fieldofstudy} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div> 
                  <div className="field">
                        <p>
                        	<input
                                 type="checkbox"
                                 name="current"
                                 checked={current}
                                 value={current}
                                 onChange={e=>{
                                	  setFormData({...formData,current:!current});
                                	  toggleDisable(!toDateDisable);
                                  }}

                        	/>

                        </p>
                  </div>     
               <div className="field">
                  <label>to</label>
                  <input 
                     type="date"
                     name="to"
                     disabled={toDateDisable? 'disabled':''}
                     value={to} 
                     onChange={(e)=>onChange(e)}
                     />
              </div>
               <div className="field">
                  <label>from</label>
                  <input 
                     type="date"
                     name="from"
                     value={from} 
                     onChange={(e)=>onChange(e)}
                     />
              </div>			                  


			                   <div className="field">
			                      <label>description</label>
			                      <input 
			                         type="text"
			                         name="description"
			                         placeholder="description"
			                         value={description} 
			                         onChange={(e)=>onChange(e)}
			                         />
			                  </div>
			                  <button type="submit">Submit</button>                                     
  	        </form>

          </Fragment>)

}


/*


           

*/




export default connect(null, {addEducation})(withRouter(AddEducation));