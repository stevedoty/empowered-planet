import React from 'react';



function Intro() {
  return (
    <div className="intro">

      <section id="intro" className="main style1 dark fullscreen">
        <div className="content">
          <header>
            <p
              style={{fontWeight: "500", padding: "1em 0.5em 0 0.5em", fontSize: "2.618em", fontVariant: "small-caps",}}>
                Empowered Planet</p>
          </header>
        <br />
        ~
        <br />
          <footer>
            <p
              style={{fontWeight:"100", padding: "0 0.5em 1.618em 0.5em", fontSize: "1em", fontVariant: "small-caps"}}>
                Global and Local Collaboration</p>
          </footer>
        </div>
      </section>

    </div>
  );
}

export default Intro;
