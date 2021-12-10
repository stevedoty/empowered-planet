import React from 'react';
import './sliderItem.scss'


const SliderItem = ({ props, header, subheader, info, link, footnote }) => (
<div className="sliderItem">
  <div className="sliderItem_header">{header}</div>
  <div className="sliderItem_subheader">{subheader}</div>
  <div className="sliderItem_info">{info}</div>
  <div className="sliderItem_link">{info}</div>
  <div className="sliderItem_footnote">{info}</div>
</div>
)

export default SliderItem;
