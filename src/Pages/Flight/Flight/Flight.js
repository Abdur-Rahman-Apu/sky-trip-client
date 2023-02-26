import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ShowAllFlight from '../ShowAllFlight/ShowAllFlight';

const Flight = () => {

    const [allFlight, setAllFlight] = useState([])

    const [Error, setError] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/allFlight`)
            .then(res => res.json())
            .then(data => {
                setAllFlight(data)
            })
            .catch(error => {
                toast.error("Fetch data failed")
                setError(error?.message)
            })
    }, [])

    return (
        <div>
            {
                allFlight.length === 0 ? <p className='text-center font-bold mt-10 text-red-500'>{Error}</p>
                    :
                    allFlight?.map(flight => <ShowAllFlight key={flight._id} flight={flight}></ShowAllFlight>)
            }
        </div>
    );
};

export default Flight;