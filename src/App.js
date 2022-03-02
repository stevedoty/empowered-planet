import React, { Component } from "react";
import MAIN_DATA from './components/data'
import './App.css';
import './assets/css/main.css';

import mainBackground from "./images/imports/space-trinity.jpg"

import Navbar from './components/navbar.js';
import Banner from './components/banner.js';
import BrandLinks from './components/brandlinks.js';
import Intro from './components/intro.js';
import Library from './components/library.js';
import Store from './components/store.js';
import Messenger from './components/messenger.js';

class App extends Component {
  render() {

    return (
        <div className="App">
            <Navbar />
            <BrandLinks />
            <img className="main-background" src={mainBackground}/>
            <Banner />
            <Library />
            <Store />
            <footer id="footer" className="Footer">
                  <p>&copy; empoweredplanet</p>
            </footer>
        </div>
    );
  }
}

export default App;
