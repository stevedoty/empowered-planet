import React from 'react';
import MAIN_DATA from "./data.js";

import yo from "../images/thumbs/02.jpg"

function LibraryItem(){
  let propertiesArray = [
    {title:"title", subtitle:"subtitle", mainText:"mainText", image:"image", linkOne:"linkOne", linkTwo:"linkTwo"}
  ]
  let prop1 = propertiesArray[0]
  return (
    <div>
      <p>generic component</p>
      <div>
        <p>{prop1.title}</p>
        <p>{prop1.subtitle}</p>
        <p>{prop1.mainText}</p>
        <p>{prop1.image}</p>
        <p>{prop1.linkOne}</p>
        <p>{prop1.linkTwo}</p>
      </div>
    </div>
  )
}


function Library() {
  return (
    <div id="Library" className="Library">

        <LibraryItem/>

        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].subtitle}</p>
        </header>

        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[1].list.map((item, key)=>{
              return(
                <div className="Library-item" key={key}>
                  <img className="Library-item-image" src={yo} alt="alt"/>
                  <p className="Library-item-title">{item.title}</p>
                  <p className="Library-item-subtitle" >{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-link">youtube</p></a>
                  <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-link">website</p></a>
                </div>
              )
            })}
        </div>

        <header  className="Library-header">
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].title}</p>
        </header>
        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].list.map((item, key)=>{
              return(
                <div className="Library-item" key={key}>
                  <img className="Library-item-image" src={yo} alt="alt"/>
                  <p className="Library-item-title">{item.title}</p>
                  <p className="Library-item-subtitle" >{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-link">youtube</p></a>
                </div>
              )
            })}
        </div>

        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.ARTICLEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.ARTICLEDATA[0].subtitle}</p>
        </header>

        <div className="Library-articles">
            {MAIN_DATA.LIBRARYDATA.ARTICLEDATA[1].list.map((item, key)=>{
              return(
                <div className="Library-item" key={key}>
                      <img className="Library-item-image" src={yo} alt="alt"/>
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-header" >{item.subtitle}</p>
                      <p className="Library-item-body">{item.body}</p>
                </div>
              )
            })}
        </div>

    </div>
  );
}

export default Library;
