import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from '../CheckOut/CheckOut';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe(`${process.env.REACT_APP_Stripe_key}`);

const Payment = () => {

    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut />
            </Elements>
        </div>
    );
};

export default Payment;