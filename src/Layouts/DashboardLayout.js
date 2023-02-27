import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useRole from '../customHooks/useRole';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Lottie from "lottie-react";
import Load from "../assets/load.json";
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { loading } = useContext(AuthContext)



    const [role] = useRole()

    const location = useLocation()

    console.log(location);
    console.log(role);
    // menu 
    const adminMenu = <>
        <li><Link className={`${location.pathname === '/dashboard/allCompany' ? 'bg-black' : ''}`} to='/dashboard/allCompany'>All company</Link></li>
        <li><Link className={`${location.pathname === '/dashboard/allUser' ? 'bg-black' : ''}`} to='/dashboard/allUser'>All user</Link></li>
    </>

    const companyMenu = <>
        <li><Link className={`${location.pathname === '/dashboard/addFlight' ? 'bg-black' : ''}`} to='/dashboard/addFlight'>Add flight</Link></li>
        <li><Link className={`${location.pathname === '/dashboard/allFlight' ? 'bg-black' : ''}`} to='/dashboard/allFlight'>All flight</Link></li>
        <li><Link className={`${location.pathname === '/dashboard/bookedFlight' ? 'bg-black' : ''}`} to='/dashboard/bookedFlight'>Booked flight</Link></li>
    </>

    const userMenu = <>
        <li><Link className={`${location.pathname === '/dashboard/cart' ? 'bg-black' : ''}`} to='/dashboard/cart'>Cart</Link></li>
        <li><Link className={`${location.pathname === '/dashboard/userPaid' ? 'bg-black' : ''}`} to='/dashboard/userPaid'>Paid flight</Link></li>
    </>

    if (loading) {
        return <div className='w-[50vw] mx-auto'>
            <Lottie animationData={Load} loop={true} />
        </div>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-xs btn-success m-3 drawer-button lg:hidden">Open drawer</label>

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>


                    <ul className="menu p-4 w-[100vw] md:w-80 bg-deepViolet  text-white ">
                        <li className='mb-3 flex items-end md:hidden'><label htmlFor="my-drawer-2" className="btn btn-sm btn-circle ">✕</label></li>
                        {/* <!-- Sidebar content here --> */}

                        {
                            role === 'Admin' && adminMenu
                        }
                        {
                            role === 'Company' && companyMenu
                        }
                        {
                            role === 'User' && userMenu
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;