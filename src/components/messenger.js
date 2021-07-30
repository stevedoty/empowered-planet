import React from 'react';



function Messenger() {
  return (
    <div id="Messenger" className="Messenger">

        <header>
          <h2>Connect</h2>
          <p>Let's work together</p>
        </header>

        <form className="Messenger-body" method="post" action="#">
          <div className="Messenger-fields">
            <div className="field half"><input type="text" name="name" placeholder="Name"/></div>
            <div className="field half"><input type="email" name="email" placeholder="Email"/></div>
            <div className="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
          </div>
          <div className="Messenger-buttons">
            <input type="submit" value="Send"/>
            <input type="submit" value="Sub" />
            <input type="submit" value="Donate" />
            <input type="submit" value="Vote"/>
          </div>
        </form>

    </div>
  );
}

export default Messenger;
