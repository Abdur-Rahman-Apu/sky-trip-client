import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col items-center py-28 bg-background'>
            <h1 className='text-2xl font-bold mb-7 text-center'>Subscribe Newsletters & Get Latest News</h1>

            <form className="w-full md:w-1/2">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">

                    <input type="email" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-deepViolet hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                </div>
            </form>


        </div>
    );
};

export default Subscribe;