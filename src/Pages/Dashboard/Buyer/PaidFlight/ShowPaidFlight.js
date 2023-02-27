import React from 'react';

const ShowPaidFlight = ({ item }) => {

    return (
        <tr>
            <td>{item?.flightInfo?.companyEmail}</td>
            <td>{item?.flightInfo?.from}</td>
            <td>{item?.flightInfo?.destination}</td>
            <td>{item?.flightInfo?.flightDate}</td>
            <td>{item?.transactionId}</td>
            <td>{item?.price}</td>
        </tr>
    );
};

export default ShowPaidFlight;