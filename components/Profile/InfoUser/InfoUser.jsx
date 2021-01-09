import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './InfoUser.module.css';

const InfoUser = (props) => {
   if(!props.profile){
      return  <Preloader />
   }
   return(
      <div className={s.infoUser}>
         <div className="name">{props.profile.fullName}</div>
         <div className="aboutMe">{props.profile.aboutMe}</div>
         <img src={props.profile.photos.large} className="avatar" alt=""/>
         <div className="statusLife">{props.profile.lookingForAJobDescription}</div>
      </div>
   );
}

export default InfoUser;