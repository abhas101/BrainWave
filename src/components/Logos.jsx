import React from 'react'
import Microsoft from '../assets/Microsoft.png'
import Deloitte from '../assets/Deloitte.png'
import Tencent from '../assets/Tencent.png'
import cap from '../assets/cap.png'

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
            <img src={Microsoft} alt="asme"  />
            <img src={Deloitte} alt="asme" className='h-10'/>
            <img src={Tencent} alt="asme" />
            <img src={cap} alt="asme" />
        </div>
    </div>
    
    </>
  )
}

export default Logos