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

function Banner() {
  return (
    <div className="Banner">

      <div className="Banner-body">

<p>{quotesArray[1].quote}</p>
        <div className="Banner-body-quoteOfTheDay">
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
    </div>
  );
}

export default Banner;
