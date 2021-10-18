import React from 'react';
import SliderItem from './sliderItem'
import './sliderContainer.scss'


const items = [
  {
    title:"this is the title",
    description:"this is the full description",
    poster:"",
    screenshot:""
  },
  {
    title:"this is the title",
    description:"this is the full description",
    poster:"",
    screenshot:""
  },
  {
    title:"this is the title",
    description:"this is the full description",
    poster:"",
    screenshot:""
  },
  {
    title:"this is the title",
    description:"this is the full description",
    poster:"",
    screenshot:""
  },
  {
    title:"this is the title",
    description:"this is the full description",
    poster:"",
    screenshot:""
  },
]

const SliderContainer = () => (
<div className="sliderContainer">
  {items.map((item)=>{
    return(
      <SliderItem title={item.title}/>
    )
  })}
</div>
)

export default SliderContainer;
