
import React, { useState } from 'react';
import { ImageSlider } from './ImageSlider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Slider.css'

const Slider=({slides})=>{
    const[current,setCurrent]=useState(0);
    const length=slides.length
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0 ? length-1:current-1)
    }
    if(!Array.isArray(slides)||slides.length<=0){
        return null
    }
    return(
<section className='slider'>
<ArrowForwardIosIcon className='forward-arrow' onClick={nextSlide} />   
<ArrowBackIosIcon className='back-arrow'onClick={prevSlide} />  
{ImageSlider.map((slide,index)=>{
return(
<div className={index===current ? 'slide active': 'slide'} key={index}>
{index===current &&(<img className='image' src={slide.image} alt='travel image'/>)}
</div>
)}

)
    
    }
</section>
)}
export default Slider