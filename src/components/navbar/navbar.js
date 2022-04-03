import React from 'react';
import './navbar.css'
import brandIcon from "../../images/imports/planet.ico"

function Navbar() {
  return (
    <div id="Navbar" className="Navbar">
        <div className="Navbar-filter"></div>
        <div className="Navbar-filter"></div>
        <div className="Navbar-filter"></div>
        <div className="Navbar-filter"></div>
        <div className="Navbar-filter"></div>
        <div className="Navbar-filter"></div>
        <a href="" className="Navbar-item"><img src={brandIcon} className="Navbar-brand-icon" alt=""/></a>
        <a href="" className="Navbar-item"><p className="Navbar-brand-name">Empowered Planet</p></a>
        <a href="#Library" className="Navbar-item">Library</a>
        <a href="#Store" className="Navbar-item">Store</a>
    </div>
  );
}

export default Navbar;
