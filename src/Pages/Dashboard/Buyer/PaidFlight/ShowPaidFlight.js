import React, { useEffect, useState } from 'react';

const ShowPaidFlight = ({ item }) => {

    console.log(item);

    const [flight, setFlight] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/flight/${item?.flightInfo?.flightId}`)
            .then(res => res.json())
            .then(data => {
                setFlight(data)
            })
    }, [item?.flightInfo?.flightId])

    console.log("flight", flight);

    return (
        <tr>
            <td>{flight?.companyEmail}</td>
            <td>{flight?.from}</td>
            <td>{flight?.destination}</td>
            <td>{flight?.flightDate}</td>
            <td>{item?.transactionId}</td>
            <td>{item?.price}</td>
        </tr>
    );
};

export default ShowPaidFlight;