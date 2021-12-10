import React from 'react';
import SliderItem from './sliderItem'
import './slider.scss'

const Slider = ({ props }) => (
<div>

{props.map((props, key) => (
  <SliderItem
    title={props.title}
    time={props.time}
    description={props.description}
  />))}
</div>
)

export default Slider;
