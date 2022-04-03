import React from 'react';

import './background.css';

import mainBackground from "../../images/imports/EarthMoon.jpeg"

function Background() {
  return (
    <div className="main-background-container">
      <img className="main-background" src={mainBackground}/>
    </div>
  );
}

export default Background;
