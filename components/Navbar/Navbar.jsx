import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
   return(
      <ul className={s.menu}>
         <li className={`${s.item}`}><NavLink to="/profile" activeClassName={`${s.active}`}>Profile</NavLink></li>
         <li className={`${s.item}`}><NavLink to="/dialogs" activeClassName={`${s.active}`}>Messages</NavLink></li>
         <li className={`${s.item}`}><NavLink to="/users" activeClassName={`${s.active}`}>Users</NavLink></li>
      </ul>
   );
}

export default Navbar;