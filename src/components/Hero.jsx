import React from 'react'
import { MoveRight } from 'lucide-react'
import Cog from "../assets/cog.png"
import Cylinder from "../assets/cylinder.png"
import Noodel from "../assets/noodle.png"
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to("#cylinder",{
                y:-40,
                duration:1,         
            })
        }
        else{
            gsap.to("#cylinder",{
                y:40,
            })
        }

    })
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to("#noodle",{
                y:-60,
                duration:1,
                ease:1      
            })
        }
        else{
            gsap.to("#noodle",{
                y:60,
                duration:2,
                ease:1     
            })
        }

    })

    
    


  return (
    <>
    <div className="heroWrapper">
        <div className="hero mt-20 bg-gradient-to-b from-white to-blue-400 md:flex lg:justify-between lg:p-20">
            <div className="info p-3 md:p-5  font-base md:max-w-80 lg:max-w-96">
                <p className='border inline-flex rounded-md px-2 py-1'>Version 2.0 is here</p>
                <h1 className='text-5xl font-bold mt-5 '>Pathway to <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 '> productivity</span></h1>
                <p className='mt-5 text-xl'>celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts and celebrate your successes.</p>
                <div className="buttons mt-5 flex items-center gap-5">
                    <button className='bg-black text-white px-4 py-2 rounded-lg hover:shadow-lg' type='button'>Get for free</button>
                    <button className='flex items-center gap-2'>Learn More <span className='inline-flex'><MoveRight/></span></button>
                </div>

            </div>
            <div className="imagewrapper ">
                <div className="image mt-10 md:relative md:ml-32">
                    <img src={Cylinder} alt="cylinder" className='md:w-1/3 lg:w-1/5 md:absolute hidden md:block' id="cylinder"  />
                    <img src={Cog} alt="cog" className='md:ml-40 lg:ml-80 lg:w-1/2'/>
                    <img src={Noodel} alt="noodel" className='absolute w-1/5 right-32 top-96 hidden lg:block ' id='noodle' />
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Hero