import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    AOS.init();

    const navigate = useNavigate()


    //search functionality
    const handleSearch = (event) => {
        event.preventDefault()
        const search = event.target.search.value;
        navigate('/searchFlight', { state: search })
    }

    return (
        <div data-aos="fade-in">
            <div className='w-[50vw] mx-auto mt-28'>

                <h1 className='text-3xl font-bold text-center mb-12 dark:text-white'>Find your desired flight</h1>

                <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center">
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="voice-search" name="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter location..." required />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">

                        </button>
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 mt-10 md:mt-0 px-3 ml-2 text-sm font-medium text-white bg-deepViolet rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Search;