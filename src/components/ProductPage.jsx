import React from 'react'
import Prodcut from '../assets/ProductImage.png'
import Tube from '../assets/tube.png'
import  Pyramid  from '../assets/pyramid.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {

    useGSAP(()=>{

        window.addEventListener("wheel",function(dets){
            if(dets.deltaY>0){
                gsap.to("#tube",{
                    y:-40,
                    duration:1,         
                })
            }
            else{
                gsap.to("#tube",{
                    y:40,
                })
            }
    
        })
        window.addEventListener("wheel",function(dets){
            if(dets.deltaY>0){
                gsap.to("#pyramid",{
                    y:-40,
                    duration:1,
                    ease:1      
                })
            }
            else{
                gsap.to("#pyramid",{
                    y:40,
                    duration:2,
                    ease:1     
                })
            }
    
        })

    })


    return (
        <>

            <div className="productPageWrapper">
                <div className="productPage mt-20 flex flex-col p-2 justify-center items-center font-base  relative">
                    <p className='border text-center rounded-md px-2 py-1'>Built by Leaders in Open-source Agentic Technology & Research</p>
                    <h2 className='mt-10 text-3xl text-center font-bold'>‍Grow Your Business, Not Your <br></br><span className='text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Headcount</span></h2>
                    <p className='mt-10 text-center w-96 tracking-wider'>A combination of a System of Record that stores all critical business data & a System of Action via our agent framework that forms a System of Intelligence. Together, SoR, SoA, and SoI constitute what we call Business SuperIntelligence</p>
                    <img src={Prodcut} alt="product" className='mt-10 rounded-md shadow-md' />

                    {/* images */}

                    <img src={Tube} alt="Tube" className='hidden md:block absolute -left-32 bottom-10 w-1/3 lg:w-1/4' id='tube' />
                    <img src={Pyramid} alt="Pyramid" className='hidden md:block absolute -right-32  w-1/3 lg:w-1/4' id='pyramid' />


                </div>
            </div>




        </>
    )
}

export default ProductPage