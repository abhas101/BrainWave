import React from 'react'
import { MoveRight } from 'lucide-react'

const TopBar = () => {
  return (
    <>
    <div className="wrapper flex bg-black justify-center ">
        <div className="container flex md:gap-2 items-center justify-center md:p-3">
            <p className='text-gray-400  font-base text-xs md:text-md'>Stramline your workflow and boost your productivity.   <span className='text-white'>Get started for free</span> </p>
            <div className="icon text-white"><MoveRight/></div>
        </div>
    </div>

    
    </>
  )
}

export default TopBar