import React from 'react'
import slackIcon from "../images/icons/slack.svg"
import amazonIcon from "../images/icons/amazon.svg" 
import logitechIcon from "../images/icons/logitech.svg"
import googleIcon from "../images/icons/google.svg"
import facebookIcon from "../images/icons/facebook.svg"
function FriendWork() {
  return (
    <div className='w-full flex h-24 bg-[#F6FBF9] space-x-4 space-x justify-center pl-20'>
      <div className='basis-[20%]  flex '>
      <img  src={slackIcon} width="123px" height="31.12px"  ></img>
      </div>
      
      <div className='basis-[20%]    border-1 flex  '>
      <img  src={amazonIcon}  width="117px" height="35.2px" className='mt-4' ></img>
      </div>    

      <div className='basis-[20%]    border-1 flex'>
      <img  src={logitechIcon}  width="106" height="32.18" className='mt-2' ></img>
      </div>

      <div className='basis-[20%]    border-1 flex'>
      <img  src={googleIcon}  width="104.43" height="32.28" className='mt-2'></img>
      </div> 

      <div className='basis-[20%] border-1 flex'>
      <img  src={facebookIcon}  width="150" height="29.67" ></img>
      </div>       
    </div>
  )
}
export default FriendWork