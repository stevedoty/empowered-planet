import React, { useState } from 'react';
import BrandLinks from '../brandlinks/brandlinks'
import './navbar.css'
import brandIcon from "../../images/imports/planet.ico"

function Navbar() {
  const [style, setStyle] = useState("");

  return (
    <div id="Navbar" className="Navbar">
        <a href="" className="Navbar-item"><img src={brandIcon} className="Navbar-brand-icon" alt=""/></a>
        <a href="" className="Navbar-item Navbar-item-index">Empowered Planet</a>
        <a href="#Library" className="Navbar-item Navbar-item-index">Library</a>
        <a href="#Store" className="Navbar-item Navbar-item-index">Store</a>
        <div className="Navbar-item Navbar-item-index">Donate</div><BrandLinks />
    </div>
  );
}

export default Navbar;
