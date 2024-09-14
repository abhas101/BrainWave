import React from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <>

    <div className="wrapper p-5">
        <div className="pricing flex flex-col mt-40 font-base p-2  items-center lg:flex gap-5">
            <h3 className='text-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text'>Pricing</h3>
            <p className='text-center mt-10 tracking-wider text-xl '>Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
            <div className="pricingCardsMasterDiv mt-10 lg:flex gap-5">
{/* basic price */}
                <div className="priceItem  shadow-lg p-5 rounded-lg flex flex-col items-start justify-center">
                    <p className='text-slate-500'>Free</p>
                    <p className='text-slate-500 mt-5'><span className='font-bold text-3xl text-black'>$0</span>/month</p>
                    <button type='button' className='bg-black text-white px-10 py-2 rounded-md mt-5 w-60'>Get for free</button>
                    <p className='flex gap-5 mt-5'><Check/> Up to 5 project Member</p>
                    <p className='flex gap-5 mt-5'><Check/> Unlimited tasks and projects</p>
                    <p className='flex gap-5 mt-5'><Check/> 2GB storage</p>
                    <p className='flex gap-5 mt-5'><Check/>Integrations</p>
                    <p className='flex gap-5 mt-5'><Check/>Basic support</p>
                </div>

{/* most popular */}
                <div className="priceItem bg-black text-white  shadow-lg p-5 rounded-lg flex flex-col items-start justify-center mt-5">
                  <div className="micro flex justify-between items-center w-full">
                    <p className='text-slate-500 font-bold'>Pro</p>
                    <p className='bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-purple-500 border border-slate-200 px-2 py-1 rounded-lg'>Most Popular</p>
                  </div>
                    <p className='text-slate-500 mt-5'><span className='font-bold text-3xl text-white'>$9</span>/month</p>
                    <button type='button' className='bg-gradient-to-r from-pink-50 to-pink-100 text-black px-10 py-2 rounded-md mt-5 w-60'>Sign up now</button>
                    <p className='flex gap-5 mt-5'><Check/> Up to 50 project Member</p>
                    <p className='flex gap-5 mt-5'><Check/> Unlimited tasks and projects</p>
                    <p className='flex gap-5 mt-5'><Check/> 50GB storage</p>
                    <p className='flex gap-5 mt-5'><Check/>Integrations</p>
                    <p className='flex gap-5 mt-5'><Check/>Priority support</p>
                    <p className='flex gap-5 mt-5'><Check/>Advanced support</p>
                    <p className='flex gap-5 mt-5'><Check/>Export support</p>
                </div>

{/* Business */}

<div className="priceItem  shadow-lg p-5 rounded-lg flex flex-col items-start justify-center mt-5">
                    <p className='text-slate-500'>Business</p>
                    <p className='text-slate-500 mt-5'><span className='font-bold text-3xl text-black'>$19</span>/month</p>
                    <button type='button' className='bg-black text-white px-10 py-2 rounded-md mt-5 w-60'>Sign up now</button>
                    <p className='flex gap-5 mt-5'><Check/> Up to 5 project Member</p>
                    <p className='flex gap-5 mt-5'><Check/> Unlimited tasks and projects</p>
                    <p className='flex gap-5 mt-5'><Check/> 200GB storage</p>
                    <p className='flex gap-5 mt-5'><Check/>Integrations</p>
                    <p className='flex gap-5 mt-5'><Check/>Basic support</p>
                    <p className='flex gap-5 mt-5'><Check/>Dedicated account manager</p>
                    <p className='flex gap-5 mt-5'><Check/>Custom fields</p>
                    <p className='flex gap-5 mt-5'><Check/>Advanced analytics</p>
                    <p className='flex gap-5 mt-5'><Check/>API access</p>
                    <p className='flex gap-5 mt-5'><Check/>Advanced security features</p>
                    
                </div>

            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Pricing