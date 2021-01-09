import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../logo.svg';
import s from './Header.module.css';
const Header = (props) => {
  /*<!-- Header ================================================= -->*/

  return (
    <header id="header" className={`${s.header}`}>
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nameSite">Panda</div>
        {props.auth ? 
        props.login :
        <NavLink to="/login">Login</NavLink> }
      </div>
    </header>
    );
  }
  
  export default Header;