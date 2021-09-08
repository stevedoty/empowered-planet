import React from 'react';
import MAIN_DATA from "./data.js";
let socialmediaArray = MAIN_DATA.SOCIAL_MEDIA_DATA

function SocialMedia() {
  return (
    <div className="SocialMedia BrandLinks-column">

        {socialmediaArray[1].list.map(item=>{
          return(
            <a
              href={item.link}
              target="_blank" rel="noopener noreferrer" className={"BrandLinks-icon SocialMedia-icon brands "+item.icon}>
              <span className="label">
                {item.title}
              </span>
            </a>
          )
        })}

    </div>
  );
}

export default SocialMedia;
