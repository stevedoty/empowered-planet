import React from 'react';
import './navbar.css'
import brandIcon from "../../images/imports/planet.ico"

function Navbar() {
  return (
    <div id="Navbar" className="Navbar">
        <a href="" className="Navbar-item"><img src={brandIcon} className="Navbar-brand-icon" alt=""/></a>
        <a href="" className="Navbar-item Navbar-item-index">Empowered Planet</a>
        <a href="#Library" className="Navbar-item Navbar-item-index">Library</a>
        <a href="#Store" className="Navbar-item Navbar-item-index">Store</a>
    </div>
  );
}

export default Navbar;
