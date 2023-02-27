import React, { useEffect, useState } from 'react';
import useSpecificUser from '../../../customHooks/useSpecificUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighter } from '@fortawesome/free-solid-svg-icons'

const ShowAllFlight = ({ flight, setFlight }) => {
    console.log("flight", flight);
    const [specificUser, setSpecificUser] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${flight?.companyEmail}`)
            .then(res => res.json())
            .then(data => setSpecificUser(data))
    }, [flight?.companyEmail])

    console.log("specificUser", specificUser);

    return (
        <div className="card card-side flex-col p-3 md:flex-row justify-between items-center px-10 bg-base-100 shadow-xl w-[70vw] mx-auto my-10">
            <figure><img className='w-[200px] object-cover' src={specificUser?.image} alt="Company pic" /></figure>

            <div>
                <h2 className="text-xl font-bold">
                    {flight?.from} <FontAwesomeIcon icon={faJetFighter} /> {flight?.destination}
                </h2>
                <p>{flight?.time}</p>
                <p>{flight?.seats} seats</p>
                <p>${flight?.price}</p>
            </div>
            <div >
                <label htmlFor="my-modal-3" onClick={() => { setFlight(flight) }} className="btn btn-base bg-deepViolet rounded-full my-3 md:my-0" disabled={flight?.seats === '0'}>Book</label>
            </div>

        </div>
    );
};

export default ShowAllFlight;