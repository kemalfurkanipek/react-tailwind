import React from 'react'
import markethink from "../images/icons/markethink.svg";
import './global.css'
import cub from "../images/icons/cub.svg"
import glass from "../images/icons/glass.svg"
import pyramid from "../images/icons/pyramid.svg"
import wool from "../images/icons/wool-ball.svg"
export default function ServicesFirst() {
  return (
    <div className='flex w-full pb-12 pt-16'>
      
    <div className='basis-[50%] pl-40 p-8  '> 

    <p  className='fFamily  text-[50px] font-bold text-[#253D32]  '>We're Strategic Digital<br /> Marketing Agency</p>
    <p className='fFamily  text-[20px] text-[#78847D]'>We've created a full-stack structure for <br /> our working workflow processe, were <br /> from the funny the century initial all <br />made, have spare to negatives</p>

    <p className=' fFamily   w-52 mt-5  text-[#98AA2B] font-bold ' ><b className='underline-offset-2 underline cursor-pointer'> See More</b> →</p>

    </div>

    <div className='basis-[50%]  p-8  flex flex-col content-around '> 
     
     <div className='flex'>

     <div className='basis-[45%]'>
        <img src={cub} alt="" />
        <p className='fFamily mt-4 text-[20px] font-bold text-[#253D32]'>Content Strategy</p>
        <p className='fFamily mt-4 text-[20px] font-thin text-[#78847D]'>All our content marketing <br />service packages include <br /> a custom content strategy</p>

     </div>

     <div className='basis-[50%]'>
        <img src={pyramid} alt="" />
        <p className='fFamily mt-4 text-[20px] font-bold text-[#253D32]'>Content Development</p>
        <p className='fFamily mt-4 text-[20px] font-thin text-[#78847D]'>We create some content <br /> calendar for your company’s <br /> must-share content</p>

     </div>
     </div>

     <div className='flex mt-14'>

     <div className='basis-[45%]'>
        <img src={wool} alt="" />
        <p className='fFamily mt-4 text-[20px] font-bold text-[#253D32]'>Content Creation</p>
        <p className='fFamily mt-4 text-[20px] font-thin text-[#78847D]'>Experienced in <br /> copywriting and marketing <br /> team begins creating <br /> content</p>

     </div>

     <div className='basis-[50%]'>
        <img src={glass} alt="" />
        <p className='fFamily mt-4 text-[20px] font-bold text-[#253D32]'>Content Optimization</p>
        <p className='fFamily mt-4 text-[20px] font-thin text-[#78847D]'>Your content marketing <br /> management services also <br /> include SEO</p>

     </div>
     </div>
     </div>

</div>
  )
}
