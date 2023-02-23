import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Lottie from "lottie-react";
import Err from '../../../assets/error.json';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-96 mx-auto'>
                <Lottie animationData={Err} loop={true} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;