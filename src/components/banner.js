import React from 'react';

let quotesArray = [
  {
    quote: "If you quit, that's a guaranteed failure",
    author: "Steve Harvey",
    publisher: "E. P."
  }
]

function Banner() {
  return (
    <div className="Banner">

      <div className="Banner-body">
        {quotesArray.map((item, key)=>{
          return(

            <div className="Banner-body-quote">
              <h1 className="Banner-body-quote-main">" {item.quote} "</h1>
              <h2 className="Banner-body-quote-author">by {item.author}</h2>
              <p className="Banner-body-quote-publisher">provided by {item.publisher}</p>
            </div>

          )
        })}

      </div>
    </div>
  );
}

export default Banner;
