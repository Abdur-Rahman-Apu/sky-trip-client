import React from 'react';
import { toast } from 'react-hot-toast';
import useFlight from '../../../../customHooks/useFlight';
import ShowAllFlight from './ShowAllFlight';

const AllFlight = () => {

    const [flights, flightRefetch] = useFlight()

    const handleDeleteFlight = (id) => {
        fetch(`https://skytrip.vercel.app/deleteFlight/${id}`, {
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
                            <th>Flight Date</th>
                            <th>Flight Time</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            flights?.map(flight => <ShowAllFlight key={flight._id} flight={flight} handleDeleteFlight={handleDeleteFlight}></ShowAllFlight>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFlight;