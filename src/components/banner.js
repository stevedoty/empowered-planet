import React from 'react';

let quotesArray = [
  {
    quote: "If you quit, that's a guaranteed failure",
    author: "Steve Harvey",
    publisher: "E. P."
  },
  {
    quote: "Where your talents and the needs of the world cross, therein lies your vocation (purpose)",
    author: "Aristotle",
    publisher: "E. P."
  },
]
let quotesArrayIndex = Math.floor( Math.random()*(quotesArray.length)  )
console.log(quotesArrayIndex);
let quotesArrayItem = quotesArray[quotesArrayIndex]
console.log(quotesArrayItem);
function Banner() {
  return (
    <div className="Banner">

      <div className="Banner-body">

        <div className="Banner-body-quoteOfTheDay">
          {
            <div className="Banner-body-quote">
              <h1 className="Banner-body-quote-main">" {quotesArrayItem.quote} "</h1>
              <h2 className="Banner-body-quote-author">by {quotesArrayItem.author}</h2>
              <p className="Banner-body-quote-publisher">provided by {quotesArrayItem.publisher}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Banner;
