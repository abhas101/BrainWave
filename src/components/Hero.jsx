import React from 'react'
import { MoveRight } from 'lucide-react'
import HEROgui from "../assets/HEROgui.png"
import heroSuperSales from "../assets/heroSuperSales.png"
import InternalGUI from "../assets/InternalGUI.png"
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("#cylinder", {
                y: -40,
                duration: 1,
            })
        }
        else {
            gsap.to("#cylinder", {
                y: 40,
            })
        }

    })
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("#noodle", {
                y: -60,
                duration: 1,
                ease: 1
            })
        }
        else {
            gsap.to("#noodle", {
                y: 60,
                duration: 2,
                ease: 1
            })
        }

    })





    return (
        <>
            <div className="heroWrapper">
                <div className="hero mt-20  md:flex lg:justify-between lg:p-20">
                    <div className="info p-3 md:p-5  font-base md:max-w-80 lg:max-w-96">

                        {/* top banner */}

                        <p className='border inline-flex rounded-full px-2 py-1 bg-gradient-to-r   
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text '>Introducing Business SuperIntelligence</p>

                        {/* heading */}
                        <h1 className='text-5xl font-bold mt-5 '>Your Business on AutoPilot with AI Agents for <span className='bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text'> Marketing, Deveolpement, Sales and support.</span></h1>

                        {/* Description */}
                        <p className='mt-5 text-xl'>AI Agents for fully autonomous sales, support, marketing and app development</p>

                        {/* button */}
                        <div className="buttons mt-5 flex items-center gap-5">

                            {/* animatied button start */}
                            <a href="https://superagi.com/get-in-touch/" target='_blank' class="relative inline-flex items-center justify-center p-2 px-12 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-violet-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-violet-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get a demo</span>
                                <span class="relative invisible">Get a demo</span>
                            </a>
                            {/* animated button end */}

                            <button className='flex items-center gap-2'>Start for Free <span className='inline-flex'><MoveRight /></span></button>
                        </div>

                    </div>
                    {/* animated items */}
                    <div className="imagewrapper ">
                        <div className="image mt-10 md:relative md:ml-32">
                            {/* hidden md:block < add this class to remove animated elements in mobile mode*/}
                            <img src={heroSuperSales} alt="cylinder" className=' md:absolute ' id="cylinder" />
                            <img src={HEROgui} alt="cog" className='md:ml-40 lg:ml-80 lg:w-1/2' />
                            <img src={InternalGUI} alt="noodel" className='absolute w-1/4 right-32 top-96 hidden lg:block ' id='noodle' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero