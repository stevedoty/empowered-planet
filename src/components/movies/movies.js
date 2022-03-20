import React from 'react';
import MAIN_DATA from "./data";

let MOVIELIST = MAIN_DATA.MOVIELIST;

const Movie = props => {
  return (
    <div className="Movie">
      <p className="Movie-title">{props.title}</p>
      <p className="Movie-subtitle" >{props.time}</p>
      <p className="Movie-subtitle" >{props.description}</p>
    </div>
  )
}

function Movies() {
  return (
    <div id="Movies" className="Movies">
        <header  className="Movies-header">
          <h2>{MOVIELIST.title}</h2>
          <p>{MOVIELIST.subtitle}</p>
        </header>

        <div className="Movies-list">
            {MOVIELIST.list.map((item, key)=>{
              return(
                <Movie {...item} key={key}/>
              )
            })}
        </div>
    </div>
  );
}

export default Movies;
