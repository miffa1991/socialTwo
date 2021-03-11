import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const Dialogs = (props) =>{
   let path = "/dialogs/" + props.id;
   return(
      <NavLink to={path} className={s.userMessage}>
         <img src="#" className={s.avatar} alt=""/>
         <span className={s.name}>{props.name}</span>
      </NavLink>
   );
}

export default Dialogs;