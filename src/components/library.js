import React from 'react';

import image from "../images/imports/Lorem-Ipsum-example.jpg"

let articlesArray = [
  {
    title: "Bringing Communities Together",
    subtitle: "Offering Information and Products"
  },
  {
    title: "Articles",
    list: [

      {
        image: image,
        title: "Community & Respect",
        header: "How do we make it work? What have we been missing? What is necessary? What is the most important thing to remember? Is this the way nature was intended?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Nature & Technology",
        header: "Is there a balance? What's this whole automation thing?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Responsibilities",
        header: "What are we missing? What is not being taken care of?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Education",
        header: "Is it really that important? Is this the problem? How can we make it accessible?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Nutrition",
        header: "Is it that big of a deal? Can it be made simpler? What about all-in-ones? Is organic really worth it?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Food & Agriculture",
        header: "?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Inspiration",
        header: "Where did we go wrong? What has already started? What should we do next? What is getting in the way?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Ecosystem & Economy",
        header: "Can we balance the two? What is going on right now? What should we do next? What is getting in the way?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Justice",
        header: "Is empathy the key? What can we do right now? More or less punishment? What is our plan for prevention?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Water",
        header: "Should it be privatized? Who has the right to drinking water?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },
      {
        image: image,
        title: "Love & Fear",
        header: "Can the two coexist? Can one exist without the other?",
        body: "a;lsjdlj alsjdflj aljdkj aljdfj  a;slkjdfj alsdj asdfjloij"
      },

    ]
  }
]

let youtubeArray = [
  {
    title: "Bringing Communities Together",
    subtitle: "Offering Information and Products"
  },
  {
    title: "Youtube",
    list: [
      {
        title:"Psych2Go",
        description:"Psychology",
        link:"https://www.youtube.com/channel/UCkJEpR7JmS36tajD34Gp4VA",
      },
      {
        title:"The Jimmy Dore Show",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UC3M7l8ved_rYQ45AVzS0RGA",
      },
      {
        title:"The Joe Rogan Experience",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UCzQUP1qoWDoEbmsQxvdjxgQ",
      },
      {
        title:"Breaking Points",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UCDRIjKy6eZOvKtOELtTdeUA",
      },
      {
        title:"Dr. Eric Berg DC",
        description:"Health",
        link:"https://www.youtube.com/channel/UC3w193M5tYPJqF0Hi-7U-2g",
      },
      {
        title:"Einzelgänger",
        description:"Philosophy",
        link:"https://www.youtube.com/channel/UCybBViio_TH_uiFFDJuz5tg",
      },
      {
        title:"Face Body Reading",
        description:"Psychology",
        link:"https://www.youtube.com/channel/UCZE0-RaqLq7haO7O0uFbcFg",
      },
      {
        title:"What You Will Learn",
        description:"Audiobooks",
        link:"https://www.youtube.com/channel/UCWUoZKhHOrQ-7hyqMxpTFqw",
      },
      {
        title:"Cancer Rehab PT",
        description:"Health",
        link:"https://www.youtube.com/channel/UCTCQKg24OrarFSLw1kymxJw",
      },
      {
        title:"Jack Chapple",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UCsdJxGA27BSz7IiPMn9VV1g",
      },
      {
        title:"FoundMyFitness",
        description:"Health",
        link:"https://www.youtube.com/channel/UCWF8SqJVNlx-ctXbLswcTcA",
      },
      {
        title:"Therapy in a Nutshell",
        description:"Psychology",
        link:"https://www.youtube.com/channel/UCpuqYFKLkcEryEieomiAv3Q",
      },
      {
        title:"Swimming Lessons",
        description:"Survival",
        link:"https://www.youtube.com/channel/UCkhCUIrVO5s8DdmpYoZeVqA",
      },
      {
        title:"Academy of Ideas",
        description:"Philosophy",
        link:"https://www.youtube.com/channel/UCiRiQGCHGjDLT9FQXFW0I3A",
      },
      {
        title:"BullyJuice",
        description:"Health",
        link:"https://www.youtube.com/channel/UCK9JEqf7LBBx3tkrPx2xvbQ",
      },
      {
        title:"The Bioneer",
        description:"Health",
        link:"https://www.youtube.com/channel/UCIh_TPYPqjJuS_-nOfAIlfg",
      },
      {
        title:"QuickTalks",
        description:"Health",
        link:"https://www.youtube.com/channel/UC7I2tPHtve2GtBKJwvhF1Wg",
      },
      {
        title:"Matt DiMaio",
        description:"Health",
        link:"https://www.youtube.com/channel/UCfzLlzRGxSL487ZsK1Q9M4Q",
      },
      {
        title:"Our Changing Climate",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UCNXvxXpDJXp-mZu3pFMzYHQ",
      },
      {
        title:"Primitive Technology",
        description:"Survival",
        link:"https://www.youtube.com/channel/UCAL3JXZSzSm8AlZyD3nQdBA",
      },
      {
        title:"The People's Party",
        description:"Independent Media",
        link:"https://www.youtube.com/channel/UCtdXoMN0UNmtNgFrUMAdW-g",
      },
      {
        title:"Mindprovement",
        description:"Psychology",
        link:"https://www.youtube.com/channel/UCc3fuJSiPknuPI7SUtX7Bng",
      },
      {
        title:"Meditative Mind",
        description:"Music",
        link:"https://www.youtube.com/channel/UCM0YvsRfYfsniGAhjvYFOSA",
      },
      {
        title:"The Lune INNATE",
        description:"Health",
        link:"https://www.youtube.com/channel/UCPCHuLiHbhG3s_YxhMLOn6Q",
      },

    ]
  }
]

function Library() {
  return (
    <div id="Library" className="Library">

        <header  className="Library-header">
          <h2>{articlesArray[1].title}</h2>
          <input className="searchBar" type="text" name="search" placeholder="Search"/>
        </header>

        <div className="Library-articles">
            {articlesArray[1].list.map(item=>{
              return(
                <div className="Library-item">
                      <img className="Library-item-image" src={item.image} alt="yo"/>
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-header" >{item.subtitle}</p>
                      <p className="Library-item-body">{item.body}</p>
                </div>
              )
            })}
        </div>

        <header  className="Library-header">
          <h2>{youtubeArray[1].title}</h2>
          <input className="searchBar" type="text" name="search" placeholder="Search"/>
        </header>

        <div className="Library-youtube">
            {youtubeArray[1].list.map(item=>{
              return(
                <div className="Library-item">
                      <p className="Library-item-title">{item.title}</p>
                      <p className="Library-item-header" >{item.description}</p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><p className="Library-item-body">youtube</p></a>
                </div>
              )
            })}
        </div>

    </div>
  );
}

export default Library;
