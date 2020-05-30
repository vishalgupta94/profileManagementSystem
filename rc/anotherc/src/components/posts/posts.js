import React,{useEffect,Fragment} from 'react';
import {connect} from 'react-redux';
import {Spinner} from '../Spinner'
import {getPosts} from '../../actions/posts';
import PostItem from './PostItem';
const Posts = ({getPosts,posts:{posts,loading}})=>{
     useEffect(()=>{
          getPosts()
    },[loading]) 

 
	// return (<div>
	// 	      test
 //        	</div>);

	return loading ? <Spinner /> : (
            <Fragment>
            
                 <h1 className="item">Posts</h1>
                 <p  className="item">Welcomne to the community</p>
                 //post from
                 <div className="ui segment">
                 
                 {posts.map(post=> (<PostItem key="post._id" post={post} />))} 
                  
                 </div>
              
            </Fragment>
		)

}

const mapStateToProps = state => ({
	posts:state.posts
})

export default connect(mapStateToProps,{getPosts})(Posts);