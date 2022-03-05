import React from 'react';
import MAIN_DATA from "./data.js";
let donationsArray = MAIN_DATA.DONATIONS_DATA

function Donations() {
  return (
    <div className="Donations BrandLinks-column">

        {donationsArray[1].list.map((item, key)=>{
          return(
            <a
              href={item.link}
              target="_blank" rel="noopener noreferrer" className={"BrandLinks-icon Donations-icon brands"}
              key={key}>
              <span className="label">
                {item.title}
              </span>
            </a>
          )
        })}

    </div>
  );
}

export default Donations;
