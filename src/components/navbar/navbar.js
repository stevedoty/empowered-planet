import React, { useState } from 'react';
import BrandLinks from '../brandlinks/brandlinks'
import './navbar.css'
import brandIcon from "../../images/imports/planet.ico"

function Navbar() {
  let [hidden, setHidden] = useState(false)
  let hiddenStyle = {};
  return (
    <div id="Navbar" className="Navbar">
        <a href="" className="Navbar-item"><img src={brandIcon} className="Navbar-brand-icon" alt=""/></a>
        <a href="" className="Navbar-item Navbar-item-index">Empowered Planet</a>
        <a href="#Library" className="Navbar-item Navbar-item-index">Library</a>
        <a href="#Store" className="Navbar-item Navbar-item-index">Store</a>
        <div
          id="navbar-donate-button"
          className="Navbar-item Navbar-item-index"
          onClick={()=>{ setHidden(!hidden) }}
        >Donate</div>
        <div style={ hidden?hiddenStyle:{display:"none"} }>
          <BrandLinks />
        </div>
    </div>
  );
}

export default Navbar;
