import React, { Component } from "react";
import './App.css';
import './assets/css/main.css';

import mainBackground from "./images/imports/space-trinity.jpg"

import Navbar from './components/navbar';
import Banner from './components/banner';
import BrandLinks from './components/brandlinks/brandlinks';
import Intro from './components/intro';
import Movies from './components/movies/movies'
import Library from './components/library';
import Store from './components/store';
import Parallax from './components/parallax/parallax'
import Messenger from './components/messenger';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <BrandLinks />
            <img className="main-background" src={mainBackground}/>
            <Banner />
            <Movies />
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
