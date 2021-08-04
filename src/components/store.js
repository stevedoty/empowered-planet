import React from 'react';
import MAINDATA from "./data.js";
import image from "../images/imports/Lorem-Ipsum-example.jpg"


function Vision() {
  return (
    <div id="Store" className="Store">


          <header  className="Store-header" style={{width:"100%"}}>
            <h2>{MAINDATA.STOREDATA[0].title}</h2>
            <p>{MAINDATA.STOREDATA[0].subtitle}</p>
            <input className="searchBar" type="text" name="search" placeholder="Search"/>
          </header>

            {MAINDATA.STOREDATA[1].list.map(item=>{
              return(
                <div className="Store-item">
                      <img className="Store-item-image" src={image} alt="yo"/>
                      <p className="Store-item-title">{item.name}</p>
                      <p>{item.description}</p>
                      <p>{item.name}</p>
                </div>
              )
            })}


    </div>
  );
}

export default Vision;
