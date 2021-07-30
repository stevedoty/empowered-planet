import React from 'react';



function List() {
  return (
    <div className="list">

  		<div id="list">
  			<div className="list-header">
          <img className="list-header-icon"/>
          <div className="list-header-title">"quote"</div>
  				<div className="list-header-subheader">-Steve Harvey</div>
  			</div>
  			<div className="list-footer">
  				<div className="list-footer-title"></div>
  				<div className="list-footer-subheader">@g_sadat2012</div>
  				<img src={require('../images/thumbs/journalist2.jpg').default} className="journalist-picture" alt=""/>
  			</div>
  		</div>

    </div>
  );
}

export default List;
