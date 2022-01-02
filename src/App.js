import React, { Component } from "react";
import MAIN_DATA from './components/data'
import './App.css';
import './assets/css/main.css';

import image from "./images/imports/oceantides.jpg"

import Navbar from './components/navbar.js';
import Searchbar from "./components/searchbar.js"
import Banner from './components/banner.js';
import BrandLinks from './components/brandlinks.js';
import Intro from './components/intro.js';
import Slider from './components/Slider/slider.js'
import Library from './components/library.js';
import Store from './components/store.js';
import Messenger from './components/messenger.js';

import ToDO from "./components/todo";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";



const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

let MOVIELIST = MAIN_DATA.MOVIELIST;

class App extends Component {
  render() {

    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">

          <Navbar />
          <Searchbar />
          <Banner />

          <BrandLinks />

          <Library />
          <Store />
          <footer id="footer" className="Footer">
                <p>&copy; empoweredplanet</p>
          </footer>
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
