import React from 'react';
import './sliderItem.scss'


const SliderItem = ({ props, title, time, description }) => (
<div className="sliderItem">
  <div className="sliderItem_title">{title}</div>
  <div className="sliderItem_time">{time}</div>
  <div className="sliderItem_description">{description}</div>
</div>
)

export default SliderItem;
