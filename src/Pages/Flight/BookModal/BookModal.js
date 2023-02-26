import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookModal = ({ flight, setFlight }) => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleBook = (event) => {
        event.preventDefault()

        const seat = event.target.seat.value;
        const bookInfo = {
            flightId: flight?._id,
            seat,
            buyerEmail: user?.email
        }

        fetch(`http://localhost:5000/bookFlight`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Booked")
                    setFlight(null)
                    navigate('/dashboard/cart')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Confirmation message</h3>
                    <form onSubmit={handleBook}>
                        <div className="my-3">
                            <label htmlFor="seat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seat</label>
                            <input type="number" name='seat' id="seat" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="modal-action">
                            <button className="btn">Confirm</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default BookModal;