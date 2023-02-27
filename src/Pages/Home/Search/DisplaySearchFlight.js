import React from 'react';
import useSpecificUser from '../../../customHooks/useSpecificUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighter } from '@fortawesome/free-solid-svg-icons'

const DisplaySearchFlight = ({ item, setItem }) => {
    const [specificUser] = useSpecificUser(item?.companyEmail)
    console.log("dSF", specificUser);
    return (
        <div className="card card-side flex-col md:flex-row p-3 justify-between items-center px-10 bg-base-100 shadow-xl w-[70vw] mx-auto my-10">
            <figure><img className='h-44' src={specificUser?.image} alt="Movie" /></figure>

            <div>
                <h2 className="text-xl font-bold">
                    {item?.from} <FontAwesomeIcon icon={faJetFighter} /> {item?.destination}
                </h2>
                <p>{item?.time}</p>
                <p>{item?.seats} seats</p>
                <p>${item?.price}</p>
            </div>
            <div >
                <label htmlFor="my-modal-3" onClick={() => { setItem(item) }} className="btn btn-base bg-deepViolet rounded-full my-3 md:my-0" disabled={item?.seats === '0'}>Book</label>
            </div>

        </div>
    );
};

export default DisplaySearchFlight;