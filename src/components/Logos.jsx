import React from 'react'
import logoasme from '../assets/logo-acme.png'
import logoapex from '../assets/logo-apex.png'
import logocelestial from '../assets/logo-celestial.png'
import logoecho from '../assets/logo-echo.png'
import logopulse from '../assets/logo-pulse.png'
import logoquantum from '../assets/logo-quantum.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Logos = () => {

    // useGSAP(()=>{
    //     gsap.to('#marquee',{
    //         transform:'translateX(-100%)',
    //         duration:20,
    //         repeat:-1,
    //         ease:"none",
             
    //     })
    // })




  return (
    <>
    <div className="logoWrapper">
        <div className="logos flex gap-12 justify-evenly overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-5" id="marquee">
            <img src={logoasme} alt="asme" />
            <img src={logoapex} alt="asme" />
            <img src={logocelestial} alt="asme" />
            <img src={logoecho} alt="asme" />
            <img src={logoquantum} alt="asme" />
        </div>
    </div>
    
    </>
  )
}

export default Logos