import MAIN_DATA from "./data.js"
import React from 'react';

let currentIssues = MAIN_DATA.CURRENTISSUESDATA

function Intro() {
  return (
    <div id="Intro" className="Intro">

            <div className="Intro-header">
              <p className="Intro-header-title">Empowered Planet</p>
              <p className="Intro-header-subtitle">Global and Local Collaboration</p>
            </div>

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

            <div>
              <h1>what we are currently up against...</h1>
              {currentIssues.globalIssues[1].list.map((item, key)=>{
                return(
                  <p>{item}</p>
                )
              })}
            </div>

    </div>
  );
}

export default Intro;
