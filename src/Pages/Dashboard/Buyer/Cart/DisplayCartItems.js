import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const DisplayCartItems = ({ book, handleCartItem }) => {

    const { _id: bookId, seat } = book;

    const [flightInfo, setFlightInfo] = useState([])

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/flight/${book.flightId}`)
            .then(res => res.json())
            .then(data => {
                setFlightInfo(data)
            })
            .catch(error => {
                toast.error('Error happened to get flight data')
            })
    }, [book.flightId])

    const { _id: flightId, from, destination, time, price } = flightInfo

    const [company, setCompany] = useState([])

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/user?email=${flightInfo?.companyEmail}`)
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [flightInfo?.companyEmail])


    return (
        <tr>

            <td><img src={company?.image} alt="company pic" /></td>
            <td>{company?.name}</td>
            <td>{from}</td>
            <td>{destination}</td>
            <td>{time}</td>
            <td>{seat}</td>
            <td>{price * seat}</td>
            <th>
                <Link to={`/dashboard/payment/${bookId}`}><button className="btn btn-info btn-xs mr-3">Pay</button></Link>
                <button onClick={() => handleCartItem(bookId, flightId)} className="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default DisplayCartItems;