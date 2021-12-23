import React from 'react';
import './sliderItem.scss'


const SliderItem = ({ props, title, time, description, link }) => (
<div className="sliderItem">
  <div className="sliderItem_header">{title}</div>
  <div className="sliderItem_subheader">{time}</div>
  <div className="sliderItem_info">{description}</div>
  <div className="sliderItem_link">{link}</div>
</div>
)

export default SliderItem;
