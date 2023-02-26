import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useRole from '../customHooks/useRole';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const [role] = useRole()

    console.log(role);
    // menu 
    const adminMenu = <>
        <li><Link to='/dashboard/allCompany'>All company</Link></li>
        <li><Link to='/dashboard/allUser'>All user</Link></li>
    </>

    const companyMenu = <>
        <li><Link to='/dashboard/addFlight'>Add flight</Link></li>
        <li><Link to='/dashboard/allFlight'>All flight</Link></li>
        <li><Link to='/dashboard/bookedFlight'>Booked flight</Link></li>
    </>

    const userMenu = <>
        <li><Link to='/dashboard/cart'>Cart</Link></li>
        <li><Link to='/dashboard/paidFlight'>Paid flight</Link></li>
    </>
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