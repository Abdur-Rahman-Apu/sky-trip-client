import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookModal from '../../Flight/BookModal/BookModal';
import DisplaySearchFlight from './DisplaySearchFlight';

const SearchFlight = () => {

    const location = useLocation()
    const data = location.state;

    const [search, setSearch] = useState([])

    const [item, setItem] = useState(null)

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/searchFlight?search=${data}`)
            .then(res => res.json())
            .then(data => setSearch(data))
    }, [data])

    console.log(search);
    return (
        <div>
            {
                search?.map(item => <DisplaySearchFlight key={item._id} item={item} setItem={setItem}></DisplaySearchFlight>)
            }
            {
                item && <BookModal flight={item} setFlight={setItem}></BookModal>
            }
        </div>
    );
};

export default SearchFlight;