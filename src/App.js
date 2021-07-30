
import './App.css';
import './assets/css/main.css';

import Navbar from './components/navbar.js';
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
          <Banner />
          <BrandLinks />
          <Intro />
          <Library />
          <Store />
          <Messenger />



      <footer id="footer">

            <p>&copy; empoweredplanet</p>

      </footer>

    </div>
  );
}

export default App;
