import React from 'react';

const ShowAllFlight = ({ flight }) => {
    return (
        <tr>
            <td>{flight?.from}</td>
            <td>{flight?.destination}</td>
            <td>{flight?.time}</td>
            <td>{flight?.seats}</td>
            <td>{flight?.price}</td>
        </tr>
    );
};

export default ShowAllFlight;