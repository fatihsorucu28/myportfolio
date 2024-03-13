import React from 'react';
import logo from './images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
        <img style={{width: '2em', marginLeft: '0.5em', marginRight: '0.5em'}}src={logo}></img>
      <h1 className="logo">Fatih Sorucu</h1>
    
    <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#cards">Projects</a></li>
    </ul>
    </nav>
  );
}

export default Navbar;
