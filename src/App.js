import React, { Component } from "react";
import './App.css';
import './assets/css/main.css';

import mainBackground from "./images/imports/EarthMoon.jpeg"

import Navbar from './components/navbar';
import Banner from './components/banner';
import LightButton from './components/light-button/light-button.js';
import BrandLinks from './components/brandlinks/brandlinks';
import Intro from './components/intro';
import Movies from './components/movies/movies'
import Library from './components/library';
import Store from './components/store';
import Messenger from './components/messenger';
import Parallax from './components/parallax/parallax.js';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <LightButton />
            <BrandLinks />
            <div className="main-background-container">
            <img className="main-background" src={mainBackground}/>
            </div>
            <Banner />
            <Movies />
            <Library />
            <Store />>
            <footer id="footer" className="Footer">
                  <p>&copy; empoweredplanet</p>
            </footer>
        </div>
    );
  }
}

export default App;
