import React from 'react';

let quotesArray = [
  {
    quote: "If you quit, that's a guaranteed failure",
    author: "Steve Harvey",
    publisher: ""
  }
]

function Banner() {
  return (
    <div className="Banner">

      <div className="">
        {quotesArray.map(item=>{
          return(

            <div>
              <h1>" {item.quote} "</h1>
              <h2>by {item.author}</h2>
              <p>provided by {item.publisher}</p>
            </div>

          )
        })}

      </div>
    </div>
  );
}

export default Banner;
