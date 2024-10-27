import React from 'react'
import logo from '../assets/AGIlogo.png'
import { Instagram,Facebook,Linkedin,Youtube } from 'lucide-react'


const Footer = () => {
  return (
    <>

    <div className="wrapper">
        <div className="footer bg-black text-white flex flex-col items-center text-center p-5 font-base">

            <img src={logo} alt="logo" className='w-20' />
            <div className="footerLinks">
                <ul className='md:flex gap-5'>
                    <li className='mt-5'><a href="#">SuperSales</a></li>
                    <li className='mt-5'><a href="#">SuperSupport</a></li>
                    <li className='mt-5'><a href="#">SuperCoder</a></li>
                    <li className='mt-5'><a href="#">SuperMarketer</a></li>
                    <li className='mt-5'><a href="#">Help</a></li>
                    <li className='mt-5'><a href="#">Carriers</a></li>

                </ul>
            </div>
            <div className="icons mt-5 flex gap-5">
                <Instagram/>
                <Facebook/>
                <Linkedin/>
                <Youtube/>
            </div>

            <p className='mt-5'>Made with ❤️ in Palo Alto, US</p>
            <p className='mt-1'>Modified with ❤️ in Bihar, IN</p>
        </div>
    </div>
    
    
    </>
  )
}

export default Footer