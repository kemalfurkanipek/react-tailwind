import React from 'react'
import hero from "../images/icons/hero.svg"
import './global.css'
import logo from "../images/icons/logo.svg"

export default function Header() {
  return (
    <div  className='backImage pt-12  h-[750px] flex flex-col place-items-center '>
      
      <div className='flex space-x-36'>

        <img src={logo} className='cursor-pointer' width={185} alt="" />

        <div>
          <ul className='flex pt-3 space-x-9 text-[19px] fFamily text-[#FFFFFF]'>
            <li className='cursor-pointer'>Features</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        <div>
         <button className='border-lime-100 border p-3 w-40 rounded-[30px] fFamily font-semibold text-[#fff] ' >Free Trial</button>
        </div>


      </div>

      <p className='text-[25px] mt-[106px] fFamily font-bold text-[#FFFFFF]'>The Best</p>

      <p className='text-[90px] mt-[25px] fFamily font-bold text-[#FFFFFF]'>Digital Marketing</p>
      
      <p className='text-[22px] mt-[25px] fFamily font-bold text-center text-[#FFFFFF]'>Completely synergize resource taxing relationships via premier <br /> niche markets. Professionally cultivate one-to-one customer</p>

      <button className='border fFamily rounded-full p-4 w-52 mt-24 bg-[#98AA2B] text-[#fff] font-bold' >Get Started</button>

    </div>
  )
}
