import React from 'react';

let donationsArray = [
  {},
  {
    title:"Donations",
    list: [
      {
        title:"Patreon",
        link:"https://www.patreon.com/login",
        icon:"fa-patreon",
      },
      {
        title:"KickStarter",
        link:"https://www.kickstarter.com/login",
        icon:"fa-kickstarter",
      },
      {
        title:"GoFundMe",
        link:"https://www.gofundme.com/login",
        icon:"fa-patreon",
      },
      {
        title:"Fundly",
        link:"https://www.fundly.com/login",
        icon:"fa-kickstarter",
      },
      {
        title:"Paypal",
        link:"https://www.paypal.com/login",
        icon:"fa-paypal",
      },
      {
        title:"eBay",
        link:"https://www.ebay.com/login",
        icon:"fa-ebay",
      },
    ]
  }
]

function Donations() {
  return (
    <div className="Donations BrandLinks-column">

        {donationsArray[1].list.map(item=>{
          return(
            <a
              href={item.link}
              target="_blank" rel="noopener noreferrer" className={"BrandLinks-icon Donations-icon brands "+item.icon}>
              <span className="label">
                {item.title}
              </span>
            </a>
          )
        })}

    </div>
  );
}

export default Donations;
