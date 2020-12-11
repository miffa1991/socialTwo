import React from 'react';
import {changePostTextActionCreator, addNewPostActionCreator} from '../../../redux/profile-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {
   //debugger;
   // let postElementRef = React.createRef();//создаем пустую ссылку
   let addPost = () => {
      props.dispatch(addNewPostActionCreator()); 
   }//додаемо пост

   let changeText = (text) => {
      props.dispatch(changePostTextActionCreator(text));
   }

   return(
      <Posts   changeText = {changeText} 
               addPost = {addPost} 
               newTextPost={props.state.newTextPost} 
               posts={props.state.postWall}/>
   )
}

export default PostsContainer;