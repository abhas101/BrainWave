import React from 'react'
import Prodcut from '../assets/product-image.png'
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
                <div className="productPage mt-40 flex flex-col p-2 justify-center items-center font-base bg-gradient-to-b from-white to-blue-200 relative">
                    <p className='border text-center rounded-md px-2 py-1'>Boost your productivity</p>
                    <h2 className='mt-10 text-3xl text-center font-bold'>A more effective way to <br></br><span className='text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>track progress</span></h2>
                    <p className='mt-10 text-center w-auto tracking-wider'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
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