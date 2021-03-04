import React from 'react';
import s from './Posts.module.css';
import PostPublic from './PostPublic/PostPublic';
import AddPostForm from './AddPostForm';


const Posts = React.memo(props => {
   //  debugger;
   let postElements = props.posts.map( p => ( <PostPublic postSend={p.message} key={p.id} id={p.id} />) );
   // let postElementRef = React.createRef();//создаем пустую ссылку

   return(
      <div className={s.wallPosts}>
       <AddPostForm addPost={props.addPost} />
         <div className="postPublic">
    
            {postElements}
         </div>
      </div>
   )
})

export default Posts;