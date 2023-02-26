import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import BookModal from '../BookModal/BookModal';
import ShowAllFlight from '../ShowAllFlight/ShowAllFlight';

const Flight = () => {

    const [allFlight, setAllFlight] = useState([])

    const [Error, setError] = useState("")

    const [flight, setFlight] = useState(null)

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
                    allFlight?.map(flight => <ShowAllFlight key={flight._id} flight={flight} setFlight={setFlight}></ShowAllFlight>)
            }

            {
                flight && <BookModal flight={flight} setFlight={setFlight}></BookModal>
            }
        </div>
    );
};

export default Flight;