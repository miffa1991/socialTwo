import React from 'react';
import s from './Posts.module.css';
import PostPublic from './PostPublic/PostPublic';


const Posts = (props) => {
   // debugger;
   let postElements = props.posts.map( p => ( <PostPublic postSend={p.message} />) );
   // let postElementRef = React.createRef();//создаем пустую ссылку
   let addPost = () => {
      props.addPost(); 
   }//додаемо пост

   let changeText = (e) => {
      let text = e.target.value;
      props.changeText(text);
   }

   return(
      <div className={s.wallPosts}>
         <div className={s.addPostWall}>
            <textarea  onChange={ changeText } value={props.newTextPost} name="" id="" cols="30" rows="10" /> {/* ref привязуемо ссылку до елемента*/}
            <button onClick={ addPost }>Send</button>
         </div>
         <div className="postPublic">
            {postElements}
         </div>
      </div>
   )
}

export default Posts;