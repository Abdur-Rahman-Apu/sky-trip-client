import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookModal from '../../Flight/BookModal/BookModal';
import DisplaySearchFlight from './DisplaySearchFlight';

const SearchFlight = () => {

    const location = useLocation()
    const data = location.state;

    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/searchFlight?search=${data}`)
            .then(res => res.json())
            .then(data => setSearch(data))
    }, [data])

    console.log(search);
    return (
        <div>
            {
                search.map(item => <DisplaySearchFlight key={item._id} item={item} setSearch={setSearch}></DisplaySearchFlight>)
            }
            {
                search && <BookModal flight={search} setFlight={setSearch}></BookModal>
            }
        </div>
    );
};

export default SearchFlight;