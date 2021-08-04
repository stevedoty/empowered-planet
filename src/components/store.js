import React from 'react';

import image from "../images/imports/Lorem-Ipsum-example.jpg"

let storeArray = [
  {
    productList: [
      {
        identification:"",
        image:image,
        name:"Soap",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Toothbrush",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Tooth Paste",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Energy Snack",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Mouthwash",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Organic Natural Produce",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
      {
        identification:"",
        image:image,
        name:"Book",
        description:"a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj",
        price:"",
      },
    ]
  }
]

function Vision() {
  return (
    <div id="Store" className="Store">


          <header  className="Store-header" style={{width:"100%"}}>
            <h2>Ecosystem</h2>
            <p>a community built on respect and cooperation</p>
            <input className="searchBar" type="text" name="search" placeholder="Search"/>
          </header>

            {storeArray[0].productList.map(item=>{
              return(
                <div className="Store-item">
                      <img className="Store-item-image" src={item.image} alt="yo"/>
                      <p className="Store-item-title">{item.name}</p>
                      <p>{item.description}</p>
                      <p>{item.name}</p>
                </div>
              )
            })}


    </div>
  );
}

export default Vision;
