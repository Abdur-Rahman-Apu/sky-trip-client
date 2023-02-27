import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
import useSpecificUser from '../../../customHooks/useSpecificUser';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext)


    const location = useLocation()


    const [theme, setTheme] = useState(null)


    useEffect(() => {
        if ((window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])


    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const menus = <>
        <li><Link to='/' className={`${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
        <li><Link to='/flight' className={`${location.pathname === '/flight' ? 'active' : ''}`}>Flight</Link></li>
        {
            user && <li><Link to='/dashboard' className={`${location.pathname.match('/dashboard') ? 'active' : ''}`}>Dashboard</Link></li>
        }
        <li><Link to='/contact' className={`${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
    </>



    const [specificUser, setSpecificUser] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSpecificUser(data)
            })
    }, [user?.email])



    return (
        <div className="navbar  p-6 shadow-lg w-full bg-[#f1f4f4] dark:bg-gray-900 dark:text-white">
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
                {
                    user && <>

                        <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
                            <div className="avatar online mr-3">
                                <div className="w-14 border border-gray-500 rounded-full " >
                                    <img src={specificUser?.image} alt='img' />
                                </div>
                            </div>
                        </div>
                    </>
                }

                {/* dark-light mode  */}


                {/* <!-- sun icon --> */}
                <div className='mr-2'>
                    {
                        theme === 'dark' ? <button onClick={() => { setTheme('light') }}><svg className="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg></button>
                            :
                            // moon icon
                            <button onClick={() => { setTheme('dark') }}>
                                <svg className="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </button>
                    }
                </div>

                {
                    user ? <>

                        <button onClick={() => {

                            logOut()
                                .then(() => {
                                    toast.success('Log out successfully')
                                    setUser(null)
                                    localStorage.removeItem('flight-token')
                                })
                                .catch(error => {
                                    toast.error("Log out failed")
                                })
                        }} className="btn btn-sm md:btn-md text-xs rounded-full border-0 bg-deepViolet">Log out</button>

                    </> :
                        <Link to='/login' className="btn btn-sm md:btn-md text-xs rounded-full border-0 bg-deepViolet">Log in</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;