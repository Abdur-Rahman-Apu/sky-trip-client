import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    const menus = <>
        <li><Link>Home</Link></li>
        <li><Link>Flight</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-[#f1f4f4] p-6 mb-10 shadow-lg w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-fit">
                        {menus}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='img-full w-12 lg:w-28' src={Logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menus
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-sm md:btn-md text-xs rounded-full border-0 bg-deepViolet">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;