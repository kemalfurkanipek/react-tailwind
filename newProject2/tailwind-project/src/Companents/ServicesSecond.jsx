import React from 'react'
import markethink from "../images/icons/markethink.svg";
import './global.css'
export default function ServicesSecond() {
  return (

  

    <div className='flex w-full pb-12 mt-20'>
      
      <div className='basis-[50%] flex justify-center '> 

          <img src={markethink} alt="" width={500}/>

      
      </div>

      <div className='basis-[50%]  p-8  '> 
       
       <p  className='fFamily text-[50px] font-bold text-[#253D32]  '>Increase Business on <br /> Social Media Reach</p>
        
        <p className='fFamily  text-[20px] text-[#78847D]'>Using our network of industry influencers, <br /> we help promete your content</p>
     
     <button className='border fFamily rounded-full p-4 w-52 mt-5 bg-[#98AA2B] text-[#fff] font-bold' >Get Started</button>
      </div>


    </div>
    
  )
}
