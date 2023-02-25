import React from 'react';
import BannerVideo from '../../../assets/banner.mp4'
import Airplane from '../../../assets/airplane.png'

const Banner = () => {
    return (
        <div className='pt-5 min-h-[600px]  dark:bg-black dark:text-white'>
            <h1 className='text-xl md:text-4xl tracking-wider font-bold text-center my-10'>Create Ever-lasting <br /> Memories With Us</h1>

            <div className='relative'>
                <video autoPlay muted loop className=' mx-auto rounded-full md:h-[300px] '>
                    <source src={BannerVideo} type="video/mp4"></source>
                </video>

                <img className='absolute -top-8 md:-top-10 lg:left-80 h-[250px] md:h-[390px]' src={Airplane} alt="airplaneImg" />
            </div>
        </div>
    );
};

export default Banner;