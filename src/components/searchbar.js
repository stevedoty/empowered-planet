import React, {useState} from 'react';
import MAIN_DATA from "./data.js"



function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')
  console.log(searchTerm)
  let handleChange = (event) => {
    setSearchTerm(event.target.value)
    if (searchTerm === "yo") {
      console.log("true")
    }
  }
  return (
    <div id="Searchbar" className="Searchbar">

      <input className="Searchbar-content" type="text" name="search" placeholder="search..." onChange={event => handleChange(event)}/>

    </div>
  );
}

export default Searchbar;
