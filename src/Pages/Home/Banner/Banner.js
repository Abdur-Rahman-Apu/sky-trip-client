import React from 'react';
import BannerVideo from '../../../assets/banner.mp4'
import Airplane from '../../../assets/airplane.png'

const Banner = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-10'>Create Ever-lasting <br /> Memories With Us</h1>

            <div className='relative'>
                <video autoPlay muted loop className=' mx-auto rounded-full h-[300px] '>
                    <source src={BannerVideo} type="video/mp4"></source>
                </video>

                <img className='absolute -top-8 md:-top-10 md:left-80 h-[290px] md:h-[390px]' src={Airplane} alt="airplaneImg" />
            </div>
        </div>
    );
};

export default Banner;