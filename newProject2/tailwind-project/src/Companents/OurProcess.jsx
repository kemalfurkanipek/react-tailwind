import React from 'react'
import pyramidGreen from "../images/icons/pyramidGreen.svg"
import vector from "../images/icons/vector.svg"
export default function OurProcess() {
  return (
    <div className='flex pt-16 pb-24 space-y-7 flex-col text-center bg-[#F6FBF9] mt-20'>
      <h1 className='fFamily text-[35px] text-[#253D32] font-bold'>How Can We Help You?</h1>
    <p className='text-[#78847D]'>Let's do great work together</p>
    <div className='flex space-x-4 justify-center content-center'>
       <div className='flex flex-col'>
       <div className='w-24 h-24 mt-7 self-center bg-[#FFFFFF] border-gray-300 border  rounded-[50%] pl-[24px] pt-5'  ><img  src={pyramidGreen}  alt="" /></div>
       <div className='   '  ><p >Update content <br />on my Website</p></div>

        </div> 
        <img src={vector} alt="" />
        <div className='flex flex-col'>
       <div className='w-12 h-12 mt-14 self-center bg-[#FFFFFF] border-gray-300 border  rounded-[50%] pl-[24px] pt-5'  ></div>
       <div className='  mt-5 '  ><p>Improve User <br />Experience</p></div>

        </div>         <img src={vector} alt="" />

        <div className='flex flex-col'>
       <div className='w-12 h-12 mt-14 self-center bg-[#FFFFFF] border-gray-300 border  rounded-[50%] pl-[24px] pt-5'  ></div>
       <div className=' mt-5  '  ><p>Request Free<br />Website Review</p></div>

        </div>   

        <img src={vector} alt="" />

        <div className='flex flex-col'>
       <div className='w-12 h-12 mt-14 self-center bg-[#FFFFFF] border-gray-300 border  rounded-[50%] pl-[24px] pt-5'  ></div>
       <div className=' mt-5  '  ><p>Improve your <br />SEO Rankings</p></div>

        </div>   
    </div>


      <button className='text-[#A3B938] '><b className='underline underline-offset-2'>See More</b> → </button>

    </div>
  )
}
