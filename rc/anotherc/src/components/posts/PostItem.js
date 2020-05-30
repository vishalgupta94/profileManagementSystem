import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addLike,removeLike} from '../../actions/posts';
const PostItem = ({addLike,removeLike,auth,post:{
	_id,
	text,
	name,
	user,
	likes,
	comments,
	date,
}}) =>{

	return (
  <div className="card">
    <div className="content">
      <img />
      <div className="header">
        {name}  Posted ON {date}  
      </div>
      <div className="meta">
        Text :{text}
      </div>
      
    </div>
    <div className="extra content">
      <div className="ui four buttons">
        <div className="ui basic green button">Discussion {comments.length}</div>
        <div onClick={(e)=>addLike(_id)} className="ui basic red button">Like {likes.length}</div>
        <div onClick={()=>removeLike()} className="ui basic green button">Dislike</div>
<Link className="item" to={`/posts/${_id}`} >Profile</Link>
{!auth.loading&& user===auth.user._id && (
<div className="ui basic red button">Delete</div>
	)}        
                
      </div>
    </div>
  </div>
		)
}


const mapStateToProps= (state)=>({
	auth:state.auth
})

export default connect(mapStateToProps,{addLike,removeLike})(PostItem);

/*

// <div className="description">
      //   Elliot requested permission to view your contact details
      // </div>
*/