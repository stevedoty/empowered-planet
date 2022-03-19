import React from 'react';
import MAIN_DATA from "../data";
let socialmediaArray = MAIN_DATA.SOCIAL_MEDIA_DATA

function SocialMedia() {
  return (
    <div className="SocialMedia BrandLinks-column">

        {socialmediaArray[1].list.map((item, key)=>{
          return(
            <a
              href={item.link}
              target="_blank" rel="noopener noreferrer" className={"BrandLinks-icon SocialMedia-icon brands"}
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

export default SocialMedia;
