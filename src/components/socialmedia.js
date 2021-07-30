import React from 'react';

let socialmediaArray = [
  {},
  {
    title:"SocialMedia",
    list: [
      {
        title:"YouTube",
        link:"https://www.youtube.com/channel/UCBxSUKp2UGcPHf44myf2o2Q",
        icon:"fa-youtube",
      },
      {
        title:"tiktok",
        link:"https://www.tiktok.com/@empoweredplanet?lang=en",
        icon:"fa-tiktok",
      },
      {
        title:"snapchat",
        link:"https://story.snapchat.com/u/empoweredplanet",
        icon:"fa-snapchat",
      },
      {
        title:"Pinterest",
        link:"https://www.pinterest.com/empoweredplanet/_saved/",
        icon:"fa-pinterest",
      },
      {
        title:"Instagram",
        link:"https://www.instagram.com/empoweredplanet/",
        icon:"fa-instagram",
      },
      {
        title:"twitter",
        link:"https://twitter.com/empoweredplane1",
        icon:"fa-twitter",
      },
      {
        title:"facebook",
        link:"https://www.facebook.com/",
        icon:"fa-facebook-f",
      },
      {
        title:"linkedin",
        link:"https://www.linkedin.com/",
        icon:"fa-linkedin-in",
      },
      {
        title:"dribbble",
        link:"https://www.dribbble.com/",
        icon:"fa-dribbble",
      },
    ]
  }
]

function SocialMedia() {
  return (
    <div className="SocialMedia BrandLinks-column">

        {socialmediaArray[1].list.map(item=>{
          return(
            <a
              href={item.link}
              target="_blank" rel="noopener noreferrer" className={"BrandLinks-icon SocialMedia-icon brands "+item.icon}>
              <span className="label">
                {item.title}
              </span>
            </a>
          )
        })}

    </div>
  );
}

export default SocialMedia;
