import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext)
    console.log(user);

    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Flight</Link></li>
        {
            user && <li><Link>Dashboard</Link></li>
        }
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
    </>


    return (
        <div className="navbar bg-[#f1f4f4] p-6 shadow-lg w-full">
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

                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="avatar online mr-4 ">
                                <div className="w-14 rounded-full " >
                                    <img src={user?.photoURL} alt='img' />
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    user ? <>

                        <button onClick={() => {

                            logOut()
                                .then(() => {
                                    toast.success('Log out successfully')
                                    setUser(null)
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