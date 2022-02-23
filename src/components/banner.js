import React from 'react';
import MAIN_DATA from "./data.js";


let quotesArray = MAIN_DATA.QUOTES_ARRAY[1].list
let quotesArrayIndex = Math.floor( Math.random()*(quotesArray.length)  )
let quotesArrayItem = quotesArray[quotesArrayIndex]

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
              <p className="Banner-body-quote-publisher">Refresh the page for more quotes</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Banner;
