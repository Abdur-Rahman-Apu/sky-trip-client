import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useSpecificUser from '../../../../customHooks/useSpecificUser';

const DisplayCartItems = ({ book, handleCartItem }) => {

    console.log(book);

    const { _id: bookId, seat } = book;

    const [flightInfo, setFlightInfo] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/flight/${book.flightId}`)
            .then(res => res.json())
            .then(data => {
                setFlightInfo(data)
            })
            .catch(error => {
                toast.error('Error happened to get flight data')
            })
    }, [book.flightId])

    const { _id: flightId, companyEmail, from, destination, time, price } = flightInfo

    const [specificUser] = useSpecificUser(companyEmail)

    console.log(specificUser);



    console.log(flightInfo);
    return (
        <tr>

            <td><img src={specificUser?.image} alt="company pic" /></td>
            <td>{specificUser?.name}</td>
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