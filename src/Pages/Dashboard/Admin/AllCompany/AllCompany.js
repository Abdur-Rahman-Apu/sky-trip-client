import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import useUser from '../../../../customHooks/useUser';
import DisplayCompany from './DisplayCompany';

const AllCompany = () => {

    const [users, refetch] = useUser()

    const handleDelete = (id) => {

        fetch(`https://skytrip.vercel.app/deleteUser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Deleted successfully')
                    refetch()
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full mt-3">
            {
                users?.company.length === 0 ? <p className='text-center mt-10 dark:text-white'>No data</p>
                    :
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.company.map((company, idx) => <DisplayCompany key={idx} company={company} handleDelete={handleDelete}></DisplayCompany>)
                            }

                        </tbody>


                    </table>
            }
        </div>
    );
};

export default AllCompany;