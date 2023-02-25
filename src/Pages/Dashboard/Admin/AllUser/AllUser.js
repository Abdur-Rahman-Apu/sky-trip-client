import React from 'react';
import { toast } from 'react-hot-toast';
import useUser from '../../../../customHooks/useUser';
import DisplayUser from './DisplayUser';

const AllUser = () => {
    const [users, refetch] = useUser()

    const handleDelete = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/deleteUser/${id}`, {
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
                users?.user.length === 0 ? <p className='text-center mt-10 dark:text-white'>No data</p> : <table className="table w-full">
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
                            users?.user.map((user, idx) => <DisplayUser key={idx} user={user} handleDelete={handleDelete}></DisplayUser>)
                        }

                    </tbody>


                </table>
            }
        </div>
    );
};

export default AllUser;