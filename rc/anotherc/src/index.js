import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />,document.querySelector("#root"));


// const MainApp= ()=>(
//     <div class="ui inverted menu">
//       <Link className="item" to="/link" >Home</Link>
//       <Link className="item" to="/messages" >Messages</Link>
//       <Link className="item" to="/friends" >Friends</Link>
//     </div>
// )

// const hh=()=>{
// 	return (<div></div>)
// }

// const Home=()=>{return(
// <div>
// <form className="ui form">
//   <div className="field">
//     <label>First Name</label>
//     <input type="text" name="first-name" placeholder="First Name" />
//   </div>
//   <div className="field">
//     <label>Last Name</label>
//     <input type="text" name="last-name" placeholder="Last Name" />
//   </div>
//   <div className="field">
//     <div className="ui checkbox">
//       <input type="checkbox" tabindex="0" className="hidden" />
//       <label>I agree to the Terms and Conditions</label>
//     </div>
//   </div>
//   <button className="ui button" type="submit">Submit</button>
// </form>
// </div>	       )};

// const Home=()=>(
// 	       <div>
// 	             Home
// 	       </div>);

// const Links=()=>(
// 	       <div>
// 	            Links
// 	       </div>);	       

// const Messages=()=>(
// 	     <div>
// 	               Messages
// 	       </div>);


// const Friends=()=>(
// 	       <div>
// 	             Friends
// 	       </div>);	       	       



// const App = ()=>(
//      <BrowserRouter className="ui container">
//      	<Fragment>
//      		<MainApp />
//      		<Switch>
//      			<Route  path="/"  exact component={Home}/>
//                	<Route  path="/link" component={Links}/>
//      			<Route  path="/messages" component={Messages}/>						
//      			<Route  path="/friends" component={Friends}/>			
//      		</Switch>
//      	</Fragment>
//      </BrowserRouter>
// 	)





