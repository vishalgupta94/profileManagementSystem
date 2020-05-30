import React from 'react';
import {connect} from 'react-redux';

const Alert = (props)=>{

	if(props.alerts.length===0){
		return (<div></div>);
          // return (<div className="ui segment" style={{backgroundColor:'red'}}>
          	                    
          // 	      </div>);
	}else{
	return (<div>
		            {props.alerts.map((item)=>{
		            return 	(<div key={item.id}
		            	          className="ui segment" 
		            	          style={{backgroundColor:'red'}}
		            	      >{item.msg}        	
		                      </div>)
		            })}
		</div>);		
	}

}

const mapStateToProps = state => ({
	alerts:state.setAlerts
})

export default connect(mapStateToProps)(Alert);