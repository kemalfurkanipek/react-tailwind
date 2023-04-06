import React from 'react'
import logoBlack from "../images/icons/logoBlack.svg"
import faceIcon from "../images/icons/facebookGreen.svg"
import twitterIcon from "../images/icons/twitter.svg"
import instIcon from "../images/icons/instagram.svg"
export default function FoooterSecond() {
  return (<>
    <div className='flex w-full px-40 space-x-40 b h-40'>

     <div className='flex flex-col'>
    <img className='cursor-pointer' src={logoBlack} width={130} alt="" />
    <p className='text-[#78847D] text-[14px] fFamily mt-5'>Marketing is a company that focus <br /> on developing company’s strategy <br /> for increase digital marketing</p>
    
    <div className='flex mt-5 space-x-4'>
<img className='cursor-pointer' src={faceIcon} width={35} alt="" />
<img className='cursor-pointer' src={twitterIcon} width={35} alt="" />
<img className='cursor-pointer' src={instIcon} width={35} alt="" />
    </div>
     </div>

     <div className='flex flex-col'>
    <p className='font-semibold fFamily text-lg'>Menu</p>
    
    <ul className='mt-4 text-[#78847D] fFamily text-[14px]'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Features</li>
        <li className='cursor-pointer'>Pricing About</li>
        <li className='cursor-pointer'>Contact Us</li>
    </ul>
     </div>


     <div className='flex flex-col'>
    <p className='font-semibold fFamily text-lg'>Services</p>
    
    <ul className='mt-4 fFamily text-[14px] text-[#78847D]'>
        <li className='cursor-pointer'>Content Strategy</li>
        <li className='cursor-pointer'>Content Development</li>
        <li className='cursor-pointer'>Content Creation</li>
        <li className='cursor-pointer'>Content Optimazion</li>
    </ul>
     </div>


     <div className='flex flex-col'>
    <p className='font-semibold fFamily text-lg'>Company</p>
    
    <ul className='mt-4 fFamily text-[14px] text-[#78847D]'>
        <li className='cursor-pointer'>Site Map</li>
        <li className='cursor-pointer'>Terms of Use</li>
        <li className='cursor-pointer'>Privacy Notice</li>
        <li className='cursor-pointer'>Cookies</li>
        <li className='cursor-pointer'>Modern Slavery</li>

    </ul>
     </div>



      
    </div>

    <div className='w-[72%] pt-16 ml-36 border-b-2  mb-4 border-b-[#EBEDEF]'></div>
    <div className='pb-12 text-center'><p className='text-[#78847D] cursor-pointer text-[13px] fFamily font-medium'>© Copyright Markethink. All right reserved </p></div>
    </>
  )
}
