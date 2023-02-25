import React from 'react';
import useRole from '../../../customHooks/useRole';
import useUser from '../../../customHooks/useUser';

const Dashboard = () => {

    const [role] = useRole()

    const [data] = useUser()

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
            </div>



        </div>
    );
};

export default Dashboard;