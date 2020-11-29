import React from 'react';
import InfoUser from './InfoUser/InfoUser';
import PostPublic from './PostPublic/PostPublic';
import s from './Profile.module.css';
import {changePostTextActionCreator, addNewPostActionCreator} from './../../redux/state';

const Profile = (props) => {
   // debugger;
   let postElements = props.state.postWall.map( p => ( <PostPublic postSend={p.message} />) );
   // let postElementRef = React.createRef();//создаем пустую ссылку
   let addPost = () => {
      props.dispatch(addNewPostActionCreator()); 
   }//додаемо пост

   let changeText = (e) => {
      let text = e.target.value;
      props.dispatch(changePostTextActionCreator(text));
   }

   return (
      <div className={s.profile}>
         <InfoUser />
         <div className={s.wallPosts}>
            <div className={s.addPostWall}>
               <textarea  onChange={ changeText } value={props.state.newTextPost} name="" id="" cols="30" rows="10" /> {/* ref привязуемо ссылку до елемента*/}
               <button onClick={ addPost }>Send</button>
            </div>
            <div className="postPublic">
               {postElements}
            </div>
         </div>
      </div>
   );
} 
export default Profile;