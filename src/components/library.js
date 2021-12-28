import React from 'react';
import MAIN_DATA from "./data.js";

import yo from "../images/thumbs/02.jpg"

import Slider from './Slider/slider.js'

function Library() {
  return (
    <div id="Library" className="Library">


        <header  className="Library-header">
          <h2>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].title}</h2>
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[0].subtitle}</p>
          <input className="searchBar" type="text" name="search" placeholder="Search"/>
        </header>


        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[1].list.map((item, key)=>{
              return(
                <div className="Library-item">
                    <img className="Library-item-image" src={yo} alt="alt"/>
                    <hr className="Library-item-hr"/>
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-subtitle" >{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-body">youtube</p></a>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-body">website</p></a>
                </div>
              )
            })}
        </div>


        <header  className="Library-header">
          <p>{MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].title}</p>
          <input className="searchBar" type="text" name="search" placeholder="Search"/>
        </header>
        <div className="Library-youtube">
            {MAIN_DATA.LIBRARYDATA.YOUTUBEDATA[2].list.map((item, key)=>{
              return(
                <div className="Library-item">
                      <img className="Library-item-image" src={"/02.jpg"} alt="alt"/>
                      <div>-</div>
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-subtitle" >{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-body">youtube</p></a>
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
                <div className="Library-item">
                      <img className="Library-item-image" src={"/02.jpg"} alt="alt"/>
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
