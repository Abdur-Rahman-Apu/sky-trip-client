import React from 'react';
import useSpecificUser from '../../../customHooks/useSpecificUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighter } from '@fortawesome/free-solid-svg-icons'

const ShowAllFlight = ({ flight }) => {
    console.log("flight", flight);
    const [specificUser] = useSpecificUser(flight?.companyEmail)
    console.log(specificUser);
    return (
        <div className="card card-side justify-between items-center px-10 bg-base-100 shadow-xl w-[70vw] mx-auto my-10">
            <figure><img className='h-44' src={specificUser?.image} alt="Movie" /></figure>

            <div>
                <h2 className="text-xl font-bold">
                    {flight?.from} <FontAwesomeIcon icon={faJetFighter} /> {flight?.destination}
                </h2>
                <p>{flight?.time}</p>
                <p>{flight?.seats} seats</p>
                <p>${flight?.price}</p>
            </div>
            <div >
                <button className="btn btn-base bg-deepViolet rounded-full" disabled={flight?.seats === '0'}>Book</button>
            </div>

        </div>
    );
};

export default ShowAllFlight;