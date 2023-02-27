import React from 'react';
import { toast } from 'react-hot-toast';
import useBooked from '../../../../customHooks/useBooked';
import DisplayCartItems from './DisplayCartItems';

const Cart = () => {

    const [booked, bookedRefetch] = useBooked()

    const handleCartItem = (bookId, flightId) => {

        fetch(`https://skytrip.vercel.app/deleteFromCart?bookId=${bookId}&flightId=${flightId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Delete successfully')
                    bookedRefetch()
                }
            })
            .catch(error => {
                toast.error("Failed to delete")
            })

    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Company image</th>
                            <th>Company name</th>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Seat</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booked?.map(book => <DisplayCartItems key={book._id} book={book} handleCartItem={handleCartItem}></DisplayCartItems>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Cart;