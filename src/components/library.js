import React from 'react';
import MAIN_DATA from "./data.js";

import yo from "../images/thumbs/02.jpg"

const LibraryItem = props => {
  console.log(props);
  return (
    <div className="Library-item">
      <img className="Library-item-image" src={props.image} alt="alt"/>
      <p className="Library-item-title">{props.title}</p>
      <p className="Library-item-subtitle" >{props.description}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-link">youtube</p></a>
      <a href={props.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-link">website</p></a>
    </div>
  )
}

function Library() {
  return (
    <div id="Library" className="Library">

        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].subtitle}</p>
        </header>

        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[1].list.map((item, key)=>{
              return(
                <LibraryItem {...item} key={key}/>
              )
            })}
        </div>

        <header  className="Library-header">
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].title}</p>
        </header>
        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].list.map((item, key)=>{
              return(
                <LibraryItem {...item} key={key}/>
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
                <LibraryItem {...item} key={key}/>
              )
            })}
        </div>

    </div>
  );
}

export default Library;
