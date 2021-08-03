import React from 'react';



import brandIcon from "../images/imports/planet.ico"


function Navbar() {
  return (
    <div id="Navbar" className="Navbar">

          <a href="#" className="Navbar-item"><img src={brandIcon} className="Navbar-brand-icon" alt=""/></a>
          <a href="#" className="Navbar-item"><p className="Navbar-brand-name">Empowered Planet</p></a>
          <a href="#Library" className="Navbar-item">Library</a>
          <a href="#Store" className="Navbar-item">Store</a>
          <a href="#Messenger" className="Navbar-item">Messenger</a>


    </div>
  );
}

export default Navbar;
