import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const AddFlight = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddFlight = (data) => {

        const { from, destination, time, seats, price } = data;

        //date set
        const date = new Date()
        date.setDate(date.getDate() + 200)
        const flightDate = date.toJSON().slice(0, 10)

        const flightInfo = {
            companyEmail: user?.email,
            from,
            destination,
            flightDate,
            time,
            seats,
            price
        }

        fetch(`https://skytrip.vercel.app/addFlight`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(flightInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Data added successfully')
                    navigate('/dashboard/allFlight')
                }
            })
    }

    return (

        <div>
            <h1 className='text-xl text-center font-bold text-deepViolet my-5 dark:text-white'>Add Flight</h1>
            <form onSubmit={handleSubmit(handleAddFlight)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
                    <div>
                        <label htmlFor="from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                        <input type="text" id="from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your location" {...register('from', { required: 'Location is required' })} />
                        {errors.from?.type === 'required' && <p className='text-red-500' role="alert">Location is required</p>}
                    </div>
                    <div>
                        <label htmlFor="destination" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination</label>
                        <input type="text" id="destination" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter location" {...register('destination', { required: 'Destination is required' })} />
                        {errors.destination?.type === 'required' && <p className='text-red-500' role="alert">Destination is required</p>}
                    </div>
                    <div>
                        <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Flight time</label>
                        <input type="text" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter flight time" {...register('time', { required: 'Time is required' })} />
                        {errors.time?.type === 'required' && <p className='text-red-500' role="alert">Flight time is required</p>}
                    </div>
                    <div>
                        <label htmlFor="seats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seats</label>
                        <input type="number" id="seats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter total seats" {...register('seats', { required: 'Seat number is required' })} />
                        {errors.seats?.type === 'required' && <p className='text-red-500' role="alert">Total seats is required</p>}
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter price" {...register('price', { required: 'Price is required' })} />
                        {errors.price?.type === 'required' && <p className='text-red-500' role="alert">Price is required</p>}
                    </div>


                </div>


                <button type="submit" className="text-white bg-deepViolet hover:bg-violet-800 focus:ring-4 focus:outline-none ml-3 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    );
};

export default AddFlight;