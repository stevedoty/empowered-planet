import React from 'react';
import MAIN_DATA from "./data.js";
import image from "../images/imports/Lorem-Ipsum-example.jpg"


function Library() {
  return (
    <div id="Library" className="Library">

        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.ARTICLEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.ARTICLEDATA[0].subtitle}</p>

        </header>

        <div className="Library-articles">
            {MAIN_DATA.LIBRARYDATA.ARTICLEDATA[1].list.map((item, key))=>{
              return(
                <div className="Library-item">
                      <img className="Library-item-image" src={image} alt="yo"/>
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-header" >{item.subtitle}</p>
                      <p className="Library-item-body">{item.body}</p>
                </div>
              )
            })}
        </div>

        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].subtitle}</p>
          <input className="searchBar" type="text" name="search" placeholder="Search"/>
        </header>

        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[1].list.map((item, key)=>{
              return(
                <div className="Library-item">
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-header" >{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-body">youtube</p></a>
                </div>
              )
            })}
        </div>

    </div>
  );
}

export default Library;
