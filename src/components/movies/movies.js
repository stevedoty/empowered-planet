import React from 'react';
import MAIN_DATA from "../data";

let MOVIELIST = MAIN_DATA.MOVIELIST;

const Movie = props => {
  return (
    <div className="Movie-wrapper">
      <div className="Movie">
        <p className="Movie-title">{props.title}</p>
      </div>
    </div>
  )
}

function Movies() {
  return (
    <div id="Movies" className="Movies">
        <header  className="Movies-header">
          <h2>{MOVIELIST.title}</h2>
          <h3>{MOVIELIST.subtitle}</h3>
        </header>

        <div className="Movies-list-wrapper">
          <div className="Movies-list">
              {MOVIELIST.list.map((item, key)=>{
                return(
                  <Movie {...item} key={key}/>
                )
              })}
          </div>
        </div>
    </div>
  );
}

export default Movies;
