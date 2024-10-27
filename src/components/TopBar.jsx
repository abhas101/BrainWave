import React from 'react'
import { MoveRight } from 'lucide-react'

const TopBar = () => {
  return (
    <>
    <div className="wrapper flex justify-center bg-gradient-to-r from-teal-400 to-yellow-200">
        <div className="container flex md:gap-2 items-center justify-center md:p-3">
            <p className='text-gray-800  font-base text-xs md:text-md'>Your Business on AutoPilot with AI Agents.<span className='text-white'>Get started for free</span> </p>
            <div className="icon text-white"><a href="https://superagi.com/" target='_blank'><MoveRight/></a></div>
        </div>
    </div>

    
    </>
  )
}

export default TopBar