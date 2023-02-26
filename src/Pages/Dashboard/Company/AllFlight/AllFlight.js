import React from 'react';
import { toast } from 'react-hot-toast';
import useFlight from '../../../../customHooks/useFlight';
import ShowAllFlight from './ShowAllFlight';

const AllFlight = () => {

    const [data, flightRefetch] = useFlight()
    console.log(data);


    const handleDeleteFlight = (id) => {
        fetch(`http://localhost:5000/deleteFlight/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Deleted successfully")
                    flightRefetch()
                }
            })
    }
    return (
        <div className='mt-5 px-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Flight Time</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map(flight => <ShowAllFlight key={flight._id} flight={flight} handleDeleteFlight={handleDeleteFlight}></ShowAllFlight>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFlight;