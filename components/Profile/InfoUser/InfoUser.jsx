import React from 'react';
import s from './InfoUser.module.css';

const InfoUser = (props) => {
   return(
      <div className={s.infoUser}>
         <img src="#" className="avatar" alt=""/>
         <div className="statusLife">Fine</div>
      </div>
   );
}

export default InfoUser;