
import './App.css';
import './assets/css/main.css';

import image from "./images/imports/oceantides.jpg"

import Navbar from './components/navbar.js';
import Searchbar from "./components/searchbar.js"
import Banner from './components/banner.js';
import BrandLinks from './components/brandlinks.js';
import Intro from './components/intro.js';
import Library from './components/library.js';
import Store from './components/store.js';
import Messenger from './components/messenger.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Banner />
      <BrandLinks />
      <Intro />
      <Library />
      <Store />
      <img src={image} style={{width:"100vw"}} alt="..."/>
      <Messenger />
      <footer id="footer" className="Footer">
            <p>&copy; empoweredplanet</p>
      </footer>
    </div>
  );
}

export default App;
