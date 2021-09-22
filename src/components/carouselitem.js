import React from 'react';
import image from "../images/imports/Lorem-Ipsum-example.jpg"

export const CarouselItem = ({header, body, footer}) => {
  return (
    <div id="CarouselItem" className="CarouselItem">
      <div className="CarouselItem-header">
        {header}
      </div>
      <div className="CarouselItem-body">
        {body}
      </div>
      <div className="CarouselItem-footer">
        {footer}
      </div>
    </div>
  );
}

export default CarouselItem;
