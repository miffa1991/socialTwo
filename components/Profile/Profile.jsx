import React from 'react';
import InfoUser from './InfoUser/InfoUser';

import s from './Profile.module.css';

import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

   

   return (
      <div className={s.profile}>
         <InfoUser profile={props.profile} />
         <PostsContainer />
      </div>
   );
} 
export default Profile;