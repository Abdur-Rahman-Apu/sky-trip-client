import React from 'react';

const ShowAllFlight = ({ flight, handleDeleteFlight }) => {
    return (
        <tr>
            <td>{flight?.from}</td>
            <td>{flight?.destination}</td>
            <td>{flight?.flightDate}</td>
            <td>{flight?.time}</td>
            <td>{flight?.seats}</td>
            <td>{flight?.price}</td>
            <td>
                <button onClick={() => handleDeleteFlight(flight?._id)} className="btn btn-error text-white btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default ShowAllFlight;