import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
   return(
      <ul className={s.menu}>
         <li className={`${s.item}`}><NavLink to="/profile" activeClassName={`${s.active}`}>Профиль</NavLink></li>
         <li className={`${s.item}`}><NavLink to="/dialogs" activeClassName={`${s.active}`}>Сообщения</NavLink></li>
         <li></li>
      </ul>
   );
}

export default Navbar;