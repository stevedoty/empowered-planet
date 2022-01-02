import React from 'react';
import MAIN_DATA from "./data.js";
import image from "../images/imports/Lorem-Ipsum-example.jpg"


function Vision() {
  return (
    <div id="Store" className="Store">


          <header  className="Store-header" style={{width:"100%"}}>
            <h2>{MAIN_DATA.STOREDATA[0].title}</h2>
            <p>{MAIN_DATA.STOREDATA[0].subtitle}</p>

          </header>

            {MAIN_DATA.STOREDATA[1].list.map((item, key)=>{
              return(
                <div className="Store-item">
                      <img className="Store-item-image" src={item.image} alt="yo"/>
                      <p className="Store-item-title">{item.name}</p>
                      <p className="Store-item-description">{item.description}</p>
                      <p className="Store-item-subtitle">{item.name}</p>
                </div>
              )
            })}


    </div>
  );
}

export default Vision;
