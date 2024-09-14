import React from 'react'
import logo from "../assets/logosaas.png"
import navLinks from "../constants/data.js"
import { useState } from 'react'
import { Menu,X } from 'lucide-react'



const Navbar = () => {

    const [MobileDrawerOpen,SetMobileDrawerOpen] = useState(false)

    const toggleNavbar = ()=>{
        SetMobileDrawerOpen(!MobileDrawerOpen);
    }


  return (
    <>

    <div className="navWrapper  mx-auto flex justify-center items-center ">
        <div className="navbar flex justify-between w-full items-center p-2 md:p-3 backdrop-filter backdrop-blur-lg fixed top-9 md:top-12 max-w-7xl rounded-lg z-50">
            <div className="icon">
            <img src={logo} alt="logo" className='w-1/3 ' />
            </div>
            <div className="navLinks hidden md:flex items-center">
                <ul className='flex'>
                    {navLinks.map((item,index)=>(
                        <li><a href={item.link} className='font-base ml-5'>{item.name}</a></li>
                    ))}
                </ul>
                <button type='button' className='bg-black text-white p-2 rounded-md ml-10'>Get for Free</button>
            </div>

            <div className="mobile md:hidden">
                <button onClick={toggleNavbar} className=''>{MobileDrawerOpen ? <X/> : <Menu/>}</button>
            </div>
        </div>

        { MobileDrawerOpen && <div className="navLinksMobile bg-gradient-to-r from-blue-400 to-blue-600 w-full md:hidden">
                    <ul className='flex flex-col items-center justify-center mt-12 mb-10'>
                        {navLinks.map((item,index)=>(
                            <li className='mb-5 text-white font-base'><a href={item.link} key={index}>{item.name}</a></li>
                        ))}
                    </ul>

        </div>}
    </div>
    
    </>
  )
}

export default Navbar