import React from 'react';
import SliderItem from './sliderItem'
import './slider.scss'

const Slider = ({ props }) => (
<div className="slider">

{props.map((props, key) => (
  <SliderItem
    title={props.title}
    time={props.time}
    description={props.description}
    link={props.link}
  />))}
</div>
)

export default Slider;
