import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
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
