import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';

const CheckOut = () => {

    const { user } = useContext(AuthContext)

    console.log(user);

    const navigate = useNavigate()

    const stripe = useStripe();
    const elements = useElements();

    const data = useLoaderData()
    console.log("Pay", data);

    const [flightInfo, setFlightInfo] = useState([])

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/flight/${data?.flightId}`)
            .then(res => res.json())
            .then(data => {
                setFlightInfo(data)
            })
    }, [data?.flightId])

    console.log("flight info", flightInfo);


    const price = parseInt(data?.seat) * parseInt(flightInfo?.price)

    console.log(price);

    const [clientSecret, setClientSecret] = useState(null)

    const [ErrorMsg, setErrorMsg] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        fetch(`https://skytrip.vercel.app/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
            })
    }, [price])


    const handleSubmit = async (event) => {
        setErrorMsg('')
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMsg(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMsg('')
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        setProcessing(false)



        if (confirmError) {
            setErrorMsg(confirmError)
        }


        if (paymentIntent.status === "succeeded") {

            setTransactionId(paymentIntent.id)

            const transactionInfo = {
                transactionId: paymentIntent.id,
                bookInfo: data,
                flightInfo,
                buyerEmail: user?.email,
                price
            }
            console.log("transaction info", transactionInfo);

            fetch(`https://skytrip.vercel.app/paid`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(transactionInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("payment successful")
                        navigate('/dashboard/userPaid')
                    }
                })


        }
    };
    return (
        <div>
            <h1 className='text-xl text-center text-deepViolet font-bold my-5'>Payment</h1>
            <form className='w-1/2 mx-auto mt-5' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs mt-4 bg-deepViolet' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

                {
                    ErrorMsg && <p className='text-red-500 font-bold'>{ErrorMsg}</p>
                }
            </form>
        </div>
    );
};

export default CheckOut;