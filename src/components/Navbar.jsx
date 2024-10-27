import React from 'react'
import logo from "../assets/AGIlogo.png"
import navLinks from "../constants/data.js"
import { useState } from 'react'
import { Menu, X, Moon, SunIcon, Sun } from 'lucide-react'



const Navbar = () => {

    // const body = document.getElementById('body');


    const [MobileDrawerOpen, SetMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        SetMobileDrawerOpen(!MobileDrawerOpen);
    }
    // dark mode
    const [darkMode, SetDarkMode] = useState(false)


    const toggleDarkMode = () => {
        SetDarkMode(!darkMode)
        body.classList.toggle('dark')
        link.classList.toggle('darktext')
    }


    return (
        <>

            <div className="navWrapper  mx-auto flex justify-center items-center">

                <div className="navbar flex justify-between w-full items-center p-2 md:p-3 backdrop-filter backdrop-blur-lg fixed top-9 md:top-12 max-w-7xl rounded-full z-50  md:mt-5 shadow-lg ">

                    {/* logo */}
                    <div className="icon">
                        <img src={logo} alt="logo" className='w-1/3' />
                    </div>


                    {/* nav links */}
                    <div className="navLinks hidden md:flex items-center gap-5">
                        <ul className='link flex'  >
                            {navLinks.map((item, index) => (
                                <li ><a href={item.link} className='font-mono  ml-5' target='_blank' >{item.name}</a></li>
                            ))}
                        </ul>
                    </div>


                    {/* button */}
                    <div className="buttons hidden md:flex items-center gap-5 ">
                        <button type='button' className='bg-black text-white p-2 rounded-full px-5 ml-10 hover:bg-gradient-to-r from-agiVoilet to-blue-500 hover:shadow-md transition-colors'><p className=''>Start for Free</p></button>
                        <button type='button' onClick={toggleDarkMode}>{darkMode ? <Sun /> : <Moon />} </button>
                    </div>


                    <div className="mobile md:hidden flex gap-5">
                        <button type='button' onClick={toggleDarkMode}>{darkMode ? <Sun /> : <Moon />} </button>
                        <button onClick={toggleNavbar} className=''>{MobileDrawerOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {/* mobile navbar */}
                {MobileDrawerOpen && <div className="navLinksMobile bg-gradient-to-r from-agiVoilet to-blue-500 w-full  transition-all md:hidden">
                    <ul className='flex flex-col items-center justify-center mt-24 mb-10 text-center'>
                        {navLinks.map((item, index) => (
                            <li className='mb-5 text-white font-base'><a href={item.link} key={index}>{item.name}</a></li>
                        ))}
                    </ul>


                </div>}
            </div>

        </>
    )
}

export default Navbar