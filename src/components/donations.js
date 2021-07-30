import React from 'react';

let donationsArray = [
  {},
  {
    title:"Donations",
    list: [
      {
        title:"",
        link:"https://www.patreon.com/login",
        icon:"fa-patreon",
      },
      {
        title:"",
        link:"https://www.kickstarter.com/login",
        icon:"fa-kickstarter",
      },
      {
        title:"",
        link:"https://www.gofundme.com/login",
        icon:"fa-patreon",
      },
      {
        title:"",
        link:"https://www.fundly.com/login",
        icon:"fa-kickstarter",
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

              </span>
            </a>
          )
        })}

    </div>
  );
}

export default Donations;
