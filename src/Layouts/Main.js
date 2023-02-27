import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Lottie from "lottie-react";
import Load from "../assets/load.json";
import { AuthContext } from '../Context/AuthProvider';



const Main = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className='w-[50vw] mx-auto'>
            <Lottie animationData={Load} loop={true} />
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;