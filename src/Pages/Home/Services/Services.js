import React from 'react';
import window from '../../../assets/window-1.jpg'
import window2 from '../../../assets/window-2.jpg'
import window3 from '../../../assets/window-3.jpg'
import './Services.css'

const Services = () => {
    return (
        <div className='px-16 h-[1400px] py-28 md:h-auto'>
            <div className='text-center'>
                <p className='text-xs uppercase tracking-[10px] mb-3'>Travel support</p>
                <h1 className='text-xl font-bold mb-2'>Plan your travel with confidence</h1>
                <p className='text-paraColor'>Find help with booking and travel plans. See what to expect along the journey!</p>
            </div>
            <div className='flex flex-col md:flex-row mt-28 gap-10'>
                <div className='basis-1/2'>
                    <div>
                        <span className="badge badge-lg bg-blue-600 border-0 mb-2 font-semibold">01</span>
                        <h1 className='text-xl font-bold mb-3'>Travel requirements for Dubai</h1>
                        <p className='text-paraColor mb-8'>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                    </div>

                    <div>
                        <span className="badge badge-lg bg-orange-400 border-0 mb-2 font-semibold">02</span>
                        <h1 className='text-xl font-bold mb-3'>Travel requirements for Dubai</h1>
                        <p className='text-paraColor mb-8'>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                    </div>

                    <div>
                        <span className="badge badge-lg bg-yellow-400 border-0 mb-2 font-semibold">03</span>
                        <h1 className='text-xl font-bold mb-3'>Travel requirements for Dubai</h1>
                        <p className='text-paraColor'>Find help with booking and travel plans, see what to expect along the journey to your favorite destinations!</p>
                    </div>

                </div>
                <div className='basis-1/2 services relative flex justify-center'>
                    <div className='rounded-full w-40 md:w-52 h-[300px] z-30 absolute top-36 left-20'>
                        <img className=' h-full object-cover ' src={window} alt="benefit-img" />
                    </div>
                    <div className='rounded-full w-40 md:w-52 h-[300px] z-20'>
                        <img className=' h-full object-cover' src={window2} alt="benefit-img" />
                    </div>
                    <div className='rounded-full w-40 md:w-40 h-[250px] z-10 absolute right-24 top-48'>
                        <img className=' h-full object-cover' src={window3} alt="benefit-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;