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



    const handleSearch = (event) => {
        event.preventDefault()
        const search = event.target.search.value;
        console.log(search);


        fetch(`http://localhost:5000/searchFlight?search=${search}`)
            .then(res => res.json())
            .then(data => setAllFlight(data))



    }

    return (
        <div>
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row justify-center mt-10'>
                <div className="form-control mb-5 md:mb-0  md:w-1/2 mr-4">

                    <input type="text" name='search' placeholder="Enter location" className="input input-bordered w-full" />

                </div>
                <input className='btn bg-deepViolet btn-md text-white font-bold ' type="submit" value="Search" />
            </form>
            {
                allFlight.length === 0 ? <p className='text-center font-bold mt-10 text-red-500 my-10'>No data found</p>
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