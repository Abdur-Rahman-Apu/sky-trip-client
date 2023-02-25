import React from 'react';
import BenefitImg1 from '../../../assets/benefit-1.jpg'
import BenefitImg2 from '../../../assets/benefit-2.jpg'
import './Benefit.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Benefit = () => {
    AOS.init();
    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-24 px-14 h-[900px] lg:h-[400px] dark:text-white'>
            <div className='basis-1/2'>
                <h1 className='mb-5 text-center md:text-left text-3xl dark:text-white font-bold'>Unaccompanied Minor Lounge</h1>
                <div className='flex flex-wrap' data-aos="fade-up-right">
                    <div className='basis-full md:basis-1/2 mb-4 '>
                        <h3 className='text-base text-yellow-500 md:text-xl font-bold'>Help through the airport</h3>
                        <p className='pr-4 text-sm'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                    </div>
                    <div className='basis-full md:basis-1/2 mb-4 '>
                        <h3 className='text-xl text-green-500 font-bold'>Priority Boarding</h3>
                        <p className='pr-4 text-sm'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                    </div>
                    <div className='basis-full md:basis-1/2 mb-4 '>
                        <h3 className='text-xl text-sky-500 font-bold'>Care on the flight</h3>
                        <p className='pr-4  text-sm'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                    </div>
                    <div className='basis-full md:basis-1/2 mb-4 '>
                        <h3 className='text-xl text-orange-400 font-bold'>Chouffeur-drive service</h3>
                        <p className='pr-4 text-sm'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 benefit-img relative flex justify-center mt-10 md:mt-0' data-aos="slide-up" data-aos-duration='1000'>
                <div className='rounded-full w-40 md:w-52 h-[200px] md:h-[300px]'>
                    <img className=' h-full object-cover' src={BenefitImg1} alt="benefit-img" />
                </div>
                <div className='rounded-full hidden md:block w-40 h-[250px] absolute top-32 right-24'>
                    <img className=' h-full object-cover' src={BenefitImg2} alt="benefit-img" />
                </div>
            </div>
        </div>
    );
};

export default Benefit;