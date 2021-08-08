import React from 'react';

let currentIssues = {
  globalIssues:[
    {
      heading:"Global Issues",
      subheading:""
    },
    {
    title:"",
    list:[
      "Privatization and Pollution of Life’s Essential Resources",
      "Genocide",
      "Slavery",
      "Sex Slavery and Kidnapping",
      "Child Rape and Molestation",
      "International Stealing of Resources",
      "Oppression of Population Through Military",
      "Private Control of Information Through Propaganda, Misinformation, and Censorship",
      "Irreversible Damage to Our Public Environment By Private Interest Groups"
      ]
    }
  ],
  internationalIssues:[
    {
      heading:"International Issues",
      subheading:""
    },
    {
    title:"",
    list:[]
    }
  ],
  nationalIssues:[
    {
      heading:"National Issues",
      subheading:""
    },
    {
    title:"",
    list:[]
    }
  ],
  regionalIssues:[
    {
      heading:"Regional Issues",
      subheading:""
    },
    {
    title:"",
    list:[]
    }
  ],
  localIssues:[
    {
      heading:"Local Issues",
      subheading:""
    },
    {
    title:"",
    list:[]
    }
  ],
}

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
