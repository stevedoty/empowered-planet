
import './App.css';
import './assets/css/main.css';

import Navbar from './components/navbar.js';
import Banner from './components/banner.js';
import Intro from './components/intro.js';
import Gallery from './components/gallery.js';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Banner />

      <Intro />



    			<section id="one" className="main style2">
    				<div className="content box style2">
    					<header>
    						<h2>Oceans</h2>
    					</header>
    					<p>vastness and vibrancy</p>
    				</div>

    			</section>


    			<section id="two" className="main style2">
    				<div className="content box style2">
    					<header>
    						<h2>Forests</h2>
    					</header>
    					<p>tranquility and lushness</p>
    				</div>

    			</section>


    			<section id="three" className="main style2">
    				<div className="content box style2">
    					<header>
    						<h2>Air</h2>
    					</header>
    					<p>fresh breezes and clear skies</p>
    				</div>

    			</section>


    			<section id="four" className="main style2">
    				<div className="content box style2">
    					<header>
    						<h2>Sun</h2>
    					</header>
    					<p>warmth and abundance</p>
    				</div>

    			</section>


    			<section id="five" className="main style2">
    				<div className="content box style2">
    					<header>
    						<h2>Ecosystem</h2>
    					</header>
    					<p>a community of respect and cooperation</p>
    				</div>
    			</section>



    			<section id="online" className="main style3 primary">
    				<div className="content">
    					<h2>Media</h2>
    					<p></p>
    					<div className="media">
    						<article className="">
    							<a href="https://www.youtube.com/channel/UCBxSUKp2UGcPHf44myf2o2Q" target="blank" className="image">
    								<div><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></div>
    								<h3>YouTube</h3>
    									<strong>?</strong>
    									<strong>?</strong>
    							</a>
    						</article>
    						<article className="">
    							<a href="images/imports/Lorem-Ipsum-example.jpg" className="image">
    								<div><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></div>
    								<h3>Blog</h3>
    									<strong>?</strong>
    									<strong>?</strong>
    							</a>
    						</article>
    						<article className="">
    							<a href="images/imports/Lorem-Ipsum-example.jpg" className="image">
    								<div><img src="images/thumbs/01.jpg" title="The Anonymous Red" alt="" /></div>
    								<h3>Twitch</h3>
    									<strong>?</strong>
    									<strong>?</strong>
    							</a>
    						</article>
    					</div>

    				</div>
    			</section>


          <Gallery />


    			<section id="contact" className="main style3 secondary">
    				<div className="content">
    					<header>
    						<h2>Connect</h2>
    						<p>two heads are better than one</p>
    					</header>
    					<div className="box">
    						<form method="post" action="#">
    							<div className="fields">
    								<div className="field half"><input type="text" name="name" placeholder="Name"/></div>
    								<div className="field half"><input type="email" name="email" placeholder="Email"/></div>
    								<div className="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
    							</div>
    							<ul className="actions special">
    								<li><input type="submit" value="Send"/></li>
    								<li><input type="submit" value="Sub" /></li>
    								<li><input type="submit" value="Donate" /></li>
    								<li><input type="submit" value="Vote"/></li>
    							</ul>
    						</form>
    					</div>
    				</div>
    			</section>


    			<footer id="footer">

    					<ul className="icons">
    						<li><a href="https://www.patreon.com/login" className="icon brands fa-patreon"><span className="label">Patreon</span></a></li>
    						<li><a href="https://www.kickstarter.com/login" className="icon brands fa-kickstarter"><span className="label">Kickstarter</span></a></li>
    						<li>gofundme</li>
    						<li>fundly</li>
    					</ul>


    					<ul className="icons">
    						<li><a
    							href="https://www.youtube.com/channel/UCBxSUKp2UGcPHf44myf2o2Q"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-youtube">
    							<span className="label">YouTube</span></a></li>
    						<li><a
    							href="https://www.tiktok.com/@empoweredplanet?lang=en"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-tiktok">
    							<span className="label">TikTok</span></a></li>
    						<li><a
    							href="https://story.snapchat.com/u/empoweredplanet"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-snapchat">
    							<span className="label">Snapchat</span></a></li>
    						<li><a
    							href="https://www.pinterest.com/empoweredplanet/_saved/"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-pinterest">
    							<span className="label">Pinterest</span></a></li>
    						<li><a
    							href="https://www.instagram.com/empoweredplanet/"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-instagram">
    							<span className="label">Instagram</span></a></li>
    						<li><a
    							href="https://twitter.com/empoweredplane1"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-twitter">
    							<span className="label">Twitter</span></a></li>
    						<li><a
    							href="https://www.facebook.com/"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-facebook-f">
    							<span className="label">Facebook</span></a></li>
    						<li><a
    							href="https://www.linkedin.com/"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin-in">
    							<span className="label">LinkedIn</span></a></li>
    						<li><a
    							href="https://www.dribbble.com/"
    							target="_blank" rel="noopener noreferrer" className="icon brands fa-dribbble">
    							<span className="label">Dribbble</span></a></li>
    					</ul>


    					<ul className="menu">
    						<li>&copy; empoweredplanet</li>
    					</ul>

    			</footer>

    </div>
  );
}

export default App;
