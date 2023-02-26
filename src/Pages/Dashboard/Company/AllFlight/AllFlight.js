import React from 'react';
import useFlight from '../../../../customHooks/useFlight';
import ShowAllFlight from './ShowAllFlight';

const AllFlight = () => {

    const [data, flightRefetch] = useFlight()
    console.log(data);
    return (
        <div>
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map(flight => <ShowAllFlight key={flight._id} flight={flight}></ShowAllFlight>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllFlight;