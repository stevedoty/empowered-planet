import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './showDetailsButton'
import Mark from './mark'
import './item.scss'

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef })} => {
      const isActive = currentSlide && currentSlide.id === movie.id;


    }

  </SliderContext.Consumer>
)
