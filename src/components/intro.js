import React from 'react';



function Intro() {
  return (
    <div id="Intro" className="Intro">

            <h1 style={{color:"darkorange",marginBottom:"100px"}}>&#60;---Follow Us<br/>Donate---&#62;</h1>

            <p style={{fontSize:"10rem",marginBottom:"0"}}>Empowered Planet</p>

            <p style={{fontSize:"4rem"}}>Global and Local Collaboration</p>

            <table className="Seasons">
              <tr className="Seasons-row">
                <th className="Seasons-cell Seasons-cell-one"></th>
                <th className="Seasons-cell Seasons-cell-two"></th>
              </tr>
              <tr className="Seasons-row Seasons-row2">
                <th className="Seasons-cell Seasons-cell-three"></th>
                <th className="Seasons-cell Seasons-cell-four"></th>
              </tr>
            </table>

    </div>
  );
}

export default Intro;
