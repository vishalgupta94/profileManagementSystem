import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import {  withRouter } from 'react-router-dom';

const AddExperience = (props) => {

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: ""
    })


    const [toDateDisable, toggleDisable] = useState(false);


    const { title, company, location, from, to, current, description } = formData;

    const onSubmitr = (e) => {
             e.preventDefault();
             props.addExperience(formData,props.history)  
         }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (<Fragment>
  	        <h2>ADD EXPERIENCE</h2>
  	        <form class="ui form" onSubmit={(e)=>onSubmitr(e)}>
  	        	   <div className="field">
                      <label>title</label>
                      <input 
                         type="text"
                         name="title"
                         placeholder="title"
                         value={title} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div> 
  	        	   <div className="field">
                      <label>company</label>
                      <input 
                         type="text"
                         name="company"
                         placeholder="company"
                         value={company} 
                         onChange={(e)=>onChange(e)}
                         />
                  </div>  
  	        	   <div className="field">
                      <label>location</label>
                      <input 
                         type="text"
                         name="location"
                         placeholder="location"
                         value={location} 
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







export default connect(null, {addExperience})(withRouter(AddExperience));