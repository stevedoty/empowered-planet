import MAIN_DATA from "./data.js"
import React from 'react';

let currentIssues = MAIN_DATA.CURRENT_ISSUES_DATA

function Intro() {
  return (
    <div id="Intro" className="Intro">

            <div className="Intro-header">
              <h1 className="Intro-header-title">Empowered Planet</h1>
              <h2 className="Intro-header-subtitle">Global and Local Collaboration</h2>
              <h3 className="Intro-header-description">We Can Accomplish More When We Work Together</h3>
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
              <h1>{currentIssues.globalIssues[0].heading}</h1>
              <h2>{currentIssues.globalIssues[0].subheading}</h2>
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
