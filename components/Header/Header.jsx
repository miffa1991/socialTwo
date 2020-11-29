import React from 'react';
import logo from './../../logo.svg';
import s from './Header.module.css';
const Header = () => {
  /*<!-- Header ================================================= -->*/
  return (
    <header id="header" className={`${s.header}`}>
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="nameSite">Panda</div>
      </div>
    </header>
    );
  }
  
  export default Header;