import React from 'react';



let quotesArray = [
  {
    quote: "If you quit, that's a guaranteed failure", author: "Steve Harvey", publisher: "E. P."
  },
  {
    quote: "Where your talents and the needs of the world cross, therein lies your vocation (purpose)", author: "Aristotle", publisher: "E. P."
  },
  {
    quote: "You are what you repeatedly do", author: "Aristotle", publisher: "E. P."
  },
  {
    quote: "Blaming others is excusing yourself.", author: "Robinn Sharma", publisher: "E. P."
  },
  {
    quote: "Stop the blame game. Stop! Stop looking out the window and look in the mirror!", author: "Eric Thomas", publisher: "E. P."
  },
  {
    quote: "Everyone must take responsibility for themselves. Blaming your problems on the world will get you nowhere.", author: "Claire Shannon", publisher: "E. P."
  },
  {
    quote: "Don't make excuses - make good.", author: "Elbert Hubbard", publisher: "E. P."
  },
  {
    quote: "...I don’t want to be judged by people who have less knowledge than me. I’m not that insecure.", author: "Marco Pierre White", publisher: "E. P."
  },
  {
    quote: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln", publisher: "E. P."
  },
  {
    quote: "BEHAVE AS THE PERSON YOU WISH TO BECOME", author: "", publisher: "E. P."
  },
  {
    quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.", author: "Albert Einstein", publisher: "E. P."
  },
  {
    quote: "No one is ugly. We just live in a judgmental world.", author: "Kim Namjoon", publisher: "E. P."
  },
  {
    quote: "Accept yourself, love yourself", author: "Kim Namjoon", publisher: "E. P."
  },
  {
    quote: "It’s not about the mistakes we make but how we correct them that defines us.", author: "", publisher: "E. P."
  },
  {
    quote: "A question opens the mind, a statement closes the mind.", author: "", publisher: "E. P."
  },
  {
    quote: "If you achieve it, then you can take it or leave it; but if you don’t achieve it then it’s always something away from you.", author: "", publisher: "E. P."
  },
  {
    quote: "If you want something you never had, you’ll need to do something you never did.", author: "", publisher: "E. P."
  },
  {
    quote: "If you’re going through hell, keep going.", author: "", publisher: "E. P."
  },
  {
    quote: "No one who can rise before dawn 360 days a year fails to make his family rich", author: "Malclom Gladwell", publisher: "E. P."
  },
  {
    quote: "It doesn’t matter what people think of you or whether or not they believe you. What matters is what you know to be good & true.", author: "", publisher: "E. P."
  },
  {
    quote: "There’s more to you than you can see.", author: "", publisher: "E. P."
  },
  {
    quote: "I would rather be the wind at your back than the spit in your face", author: "", publisher: "E. P."
  },
  {
    quote: "Live the impossible.", author: "", publisher: "E. P."
  },
  {
    quote: "There are believers and there are doubters. Which are you?", author: "", publisher: "E. P."
  },
  {
    quote: "Ego is the anesthesia that deadens the pain of stupidity", author: "Rick Rigsby", publisher: "E. P."
  },
  {
    quote: "What is your why?", author: "", publisher: "E. P."
  },
  {
    quote: "Everything is hard at first.", author: "", publisher: "E. P."
  },
  {
    quote: "Life is not about finding yourself. Life is about creating yourself", author: "", publisher: "E. P."
  },
  {
    quote: "You can only be ridden if your back is bent", author: "Dr. Martin Luther King Jr.", publisher: "E. P."
  },
  {
    quote: "It doesn’t matter how slowly you go, as long as you do not stop.", author: "", publisher: "E. P."
  },
]
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
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Banner;
