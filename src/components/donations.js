import React from 'react';



function Donations() {
  return (
    <div className="Donations BrandLinks-column">

        <a
          href="https://www.patreon.com/login"
          target="_blank" rel="noopener noreferrer" className="BrandLinks-icon Donations-icon fa-patreon">
          <span className="label">Patreon</span></a>
        <a
          href="https://www.kickstarter.com/login"
          target="_blank" rel="noopener noreferrer" className="BrandLinks-icon Donations-icon fa-kickstarter">
          <span className="label">Kickstarter</span></a>
        <a
          href="https://www.gofundme.com/login"
          target="_blank" rel="noopener noreferrer" className="BrandLinks-icon Donations-icon fa-patreon">
          <span className="label">GoFundMe</span></a>
        <a
          href="https://www.fundly.com/login"
          target="_blank" rel="noopener noreferrer" className="BrandLinks-icon Donations-icon fa-kickstarter">
          <span className="label">Fundly</span></a>

    </div>
  );
}

export default Donations;
