import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CarouselItem from './carouselitem.js'

const mapDispatchToProps = (_, {data}) => {
    return {
      header:"header",
      body:"body",
      footer:"footer"
  };
};

export const Carousel = compose(
  connect(
    null,
    mapDispatchToProps
  )(CarouselItem)
)

export default Carousel;
