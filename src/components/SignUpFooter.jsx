import React from 'react'
import { MoveRight } from 'lucide-react'

const SignUpFooter = () => {
  return (
    <>

    <div className="wrapper">
      <div className="signUpFooter p-2">
        <h4 className='text-3xl text-center font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Sign Up for free today</h4>
        <p className='mt-5 text-center tracking-wide text-xl'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <div className="buttons flex gap-2 mt-5 p-5 justify-center">
          <button type='button' className='bg-black text-white px-5 py-2 rounded-lg'>Get for free</button>
          <button type='button' className='flex gap-2 items-center'>Learn more <MoveRight/> </button>
        </div>

      </div>
    </div>
    
    
    </>
  )
}

export default SignUpFooter