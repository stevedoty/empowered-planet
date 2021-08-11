import React, {useState} from 'react';
import MAIN_DATA from "./data.js"



function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div id="Searchbar" className="Searchbar">

      <input className="Searchbar-content" type="text" name="search" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}}/>

    </div>
  );
}

export default Searchbar;
