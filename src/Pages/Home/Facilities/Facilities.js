import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import './Facilities.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facilities = () => {
    AOS.init();
    return (
        <div className='my-10 p-16 bg-background'>
            <h1 className='text-xl md:text-2xl font-bold text-center  my-10'>Travel to make memories all around the world</h1>
            <div className='my-10 flex justify-evenly flex-wrap'>
                <div className='facility flex flex-col items-center justify-center p-6' data-aos="slide-up" data-aos-duration="1000">
                    <div className='bg-blue-700 p-2 w-10 text-center text-white'>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                    <h1 className='text-xl text-center font-bold my-5 '>Book & Relax</h1>
                    <p className='text-paraColor text-center'>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
                <div className='facility flex flex-col items-center justify-center p-6 mt-10 md:mt-0' data-aos="slide-up" data-aos-duration="2000">
                    <div className='bg-orange-500 p-2 w-10 text-center text-white'>
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <h1 className='text-xl text-center font-bold my-5 '>Smart Checklist</h1>
                    <p className='text-paraColor text-center'>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
                <div className='facility flex flex-col items-center justify-center p-6 mt-10 md:mt-0' data-aos="slide-up" data-aos-duration="3000">
                    <div className='bg-amber-500 p-2 w-10 text-center text-white'>
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h1 className='text-xl text-center font-bold my-5'>Save More</h1>
                    <p className='text-paraColor text-center'>You can also call airlines from your phone and book a flight ticket!</p>
                </div>

            </div>
        </div>
    );
};

export default Facilities;