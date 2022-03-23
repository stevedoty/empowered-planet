import React, { Component } from 'react';

let twoDimensions = {
  position: "relative",
  height: "100vh",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s",
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  transitionTimingFunction: "ease",
  transitionDelay: "0s",
}
let threeDimensions = {
  transform:"translate3d(700px,0,-800px)rotateY(30deg)"
}

class Parallax extends Component {

  render() {
    return (
      <div className="parallax">

      </div>
    );
  }
}

export default Parallax;
