import React from 'react';
import InfoUser from './InfoUser/InfoUser';

import s from './Profile.module.css';

import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

   

   return (
      <div className={s.profile}>
         <InfoUser />
         <PostsContainer state={props.state}
                dispatch={props.dispatch} />
      </div>
   );
} 
export default Profile;