import React from 'react'
import { useState } from 'react'
import './global.css'
import digitalMark from "../images/icons/digitalMerket.svg"
import seoImg from "../images/icons/seoImg.svg"
import daktilo from "../images/icons/daktilo.svg"
import showIcon from "../images/icons/Show.svg"
export default function Article() {

  const [value,setValue] = useState(false)


  const onContentWriting = () => {
    setValue(true)
  }

  const onContentMarketing = () => {
    setValue(false)
  }

  return (
    <div className='flex pt-24'>

        <div className='flex flex-col pl-40 '>
            <p className='text-[35px] text-[#253D32] fFamily font-semibold '>Read More Articles <br /> From Our Blog</p>
            <img src={seoImg} className='mt-9' alt="" />
            <p className='text-[20px] fFamily mt-5 font-normal text-[#808371]'>AUGUST 17, 2021</p>
            <p className='text-[27px] text-[#253D32] fFamily font-semibold '>10 Reasons to invest in SEO copywriting,<br />services</p>
     <button className='border  border-[#98AA2B] fFamily rounded-full p-4 w-52 mt-5 bg-transparent text-[#98AA2B] font-bold' >Get Started</button>
        </div>

        <div className='flex flex-col pt-16 pl-12
        '>
        
        <div className='flex  w-full mb-[47px] pl-40 '>
          <button onClick={()=>onContentWriting()} className={`${value ? 'underline underline-offset-8 text-[20px] text-[#253D32]' : 'text-[#808371] text-[20px]'}`} >Content Writing</button>
          <button onClick={()=>onContentMarketing()} className={`${ value ? 'text-[20px] ml-28 text-[#808371]': 'underline underline-offset-8 ml-28 text-[20px] text-[#253D32] '}`}>Content Marketing</button>
        </div>

        <div className='flex'>
    {value ? <><div className='flex flex-col'>
            <img src={digitalMark} alt="" />
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>AUGUST 17, 2021</p>
            <p className='text-[22px] text-[#253D32] fFamily font-semibold mt-3 '>How to get hired at a <br /> top Digital Marketing</p>
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>Agency life. We’ve all seen the <br /> photos posted on social media –<br /> the cool...</p>
            <button className='w-12 mt-10 h-12 rounded-[50%] border border-[#98AA2B]'><img src={showIcon} className='ml-2' alt="" /></button>
          </div>

          <div className='flex ml-10 flex-col'>
            <img src={daktilo} alt="" />
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>AUGUST 17, 2021</p>
            <p className='text-[22px] text-[#253D32] fFamily font-semibold mt-3 '>Copywriting guidelines <br /> during the coronavirus</p>
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>Since the coronavirus hit earlier <br /> this year, it’s hard to go <br /> anywhere...</p>
            <button className='w-12 mt-10 h-12 rounded-[50%] border border-[#98AA2B]'><img src={showIcon} className='ml-2' alt="" /></button>
          </div> </>:<>
          <div className='flex flex-col'>
            <img src={daktilo} alt="" />
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>AUGUST 17, 2021</p>
            <p className='text-[22px] text-[#253D32] fFamily font-semibold mt-3 '>How to get hired at a <br /> top Digital Marketing</p>
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>Since the coronavirus hit earlier <br /> this year, it’s hard to go <br /> anywhere...</p>
            <button className='w-12 mt-10 h-12 rounded-[50%] border border-[#98AA2B]'><img src={showIcon} className='ml-2' alt="" /></button>
          </div>
          <div className='flex ml-10 flex-col'>
            <img src={digitalMark} alt="" />
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>AUGUST 17, 2021</p>
            <p className='text-[22px] text-[#253D32] fFamily font-semibold mt-3 '>How to get hired at a <br /> top Digital Marketing</p>
            <p className='text-[15px] fFamily mt-5 font-normal text-[#808371]'>Agency life. We’ve all seen the <br /> photos posted on social media –<br /> the cool...</p>
            <button className='w-12 mt-10 h-12 rounded-[50%] border border-[#98AA2B]'><img src={showIcon} className='ml-2' alt="" /></button>
          </div>
          </>}
          

        </div>

        </div>
      
    </div>
  )
}
