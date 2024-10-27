import React from 'react'
import { MoveRight } from 'lucide-react'

const SignUpFooter = () => {
  return (
    <>

    <div className="wrapper">
      <div className="signUpFooter p-2">
        <h4 className='text-3xl text-center font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Explore Autonomous AI Systems For Your Business</h4>
        <p className='mt-5 text-center tracking-wide'>A combination of a System of Record that stores all critical business data & a System of Action via our agent framework that forms a System of Intelligence. </p>
        <div className="buttons flex gap-2 mt-5 p-5 justify-center">
          {/* animated button start */}
          <a href="https://superagi.com/get-in-touch/" target='_blank' class="relative inline-flex items-center justify-center p-2 px-12 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-violet-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-violet-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get a demo</span>
                                <span class="relative invisible">Get a demo</span>
                            </a>
          {/* animated button end */}
          <button type='button' className='flex gap-2 items-center'>Learn more <MoveRight/> </button>
        </div>

      </div>
    </div>
    
    
    </>
  )
}

export default SignUpFooter