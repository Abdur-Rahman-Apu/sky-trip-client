import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import useBooked from '../../../customHooks/useBooked';
import useFlight from '../../../customHooks/useFlight';
import useRole from '../../../customHooks/useRole';
import useUser from '../../../customHooks/useUser';

const Dashboard = () => {

    const [role] = useRole()

    const [data] = useUser()

    const [flights] = useFlight()

    const [booked] = useBooked()

    const { user } = useContext(AuthContext)

    const [paidFlight, setPaidFlight] = useState([])

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/companyPaidInfo?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPaidFlight(data)
            })
    }, [user?.email])

    return (
        <div>
            <h1 className='text-2xl text-deepViolet font-bold text-center my-10'>Welcome to Dashboard</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 mx-5 gap-5'>

                {/* admin  */}
                {
                    role === 'Admin' && <>

                        {/* company  */}
                        <div className="card h-44 shadow-xl bg-[#26de81]">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total Company</h2>
                                <p className='text-xl text-center my-5'>{data?.company.length}</p>
                            </div>
                        </div>

                        {/* user  */}
                        <div className="card  bg-[#fed330] shadow-xl">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total Users</h2>
                                <p className='text-xl text-center my-5'>{data?.user.length}</p>
                            </div>
                        </div>
                    </>
                }

                {/* Company  */}
                {
                    role === 'Company' && <>

                        {/* company  */}
                        <div className="card h-44 shadow-xl bg-[#26de81]">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total Flight</h2>
                                <p className='text-xl text-center my-5'>{flights?.length}</p>
                            </div>
                        </div>

                        {/* user  */}
                        <div className="card  bg-[#fed330] shadow-xl">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total Sold</h2>
                                <p className='text-xl text-center my-5'>{paidFlight?.length}</p>
                            </div>
                        </div>
                    </>
                }
                {/* User  */}
                {
                    role === 'User' && <>

                        {/* Total in Cart  */}
                        <div className="card h-44 shadow-xl bg-[#26de81]">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total in Cart</h2>
                                <p className='text-xl text-center my-5'>{booked?.length}</p>
                            </div>
                        </div>

                        {/* user  */}
                        <div className="card  bg-[#fed330] shadow-xl">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">Total Booked</h2>
                                <p className='text-xl text-center my-5'>{paidFlight.length}</p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Dashboard;