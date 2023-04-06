import React from 'react'
import  './global.css'
import logo from "../images/icons/logo.svg"
export default function FooterFirst() {
  return (
    <div className='footerImage ml-36 h-[800px] mt-24'>
      
      <div className='flex flex-col pl-32 pt-28' >

      <p className='text-[36px] text-[#fff] fFamily font-semibold '>Subscribe to get information, latest <br /> news and other interesting offers about </p>
      
       <img className='mt-7 ' src={logo} alt="" width={270}/>
         

        <div className='flex'>
        <input type="text" className='w-[400px]  h-14 mt-9 rounded-[28px] placeholder:pl-10 placeholder-gray-950' placeholder='Your Email' />    
        <button  className='w-[250px] ml-5 h-14 mt-9 bg-[#98AA2B] rounded-[28px]  text-white font-bold' > Subscribe</button>   

        </div> 
      </div>

    </div>
  )
}
