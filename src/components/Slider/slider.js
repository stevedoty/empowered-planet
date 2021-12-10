import React from 'react';
import SliderItem from './sliderItem'
import './slider.scss'

const Slider = ({ props }) => (
<div className="slider">

{props.map((props, key) => (
  <SliderItem
    header={props.title}
    subheader={props.time}
    info={props.description}
  />))}
</div>
)

export default Slider;
