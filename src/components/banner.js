import React from 'react';



function Banner() {
  return (
    <div className="banner">

  		<div id="banner">
  			<div className="banner-header">
  				<div className="quote">""</div>
  				<div className="author">-Steve Harvey</div>
  			</div>
  			<div className="banner-footer">
  				<div className="empty"></div>
  				<div className="journalist-name">@g_sadat2012</div>
  				<img src={require('../images/thumbs/journalist2.jpg').default} className="journalist-picture" alt=""/>
  			</div>
  		</div>

    </div>
  );
}

export default Banner;
