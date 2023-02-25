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
        <li><Link>Add flight</Link></li>
        <li><Link>All flight</Link></li>
    </>

    const userMenu = <>
        <li><Link>Cart</Link></li>
        <li><Link>Paid flight</Link></li>
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-deepViolet  text-white ">
                        {/* <!-- Sidebar content here --> */}

                        {
                            role === 'Admin' && adminMenu
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;