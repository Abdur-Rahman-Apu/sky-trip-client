import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import DisplayCompanyPaidInfo from './DisplayCompanyPaidInfo';

const BookedFlight = () => {

    const [companyPaidInfo, setCompanyPaidInfo] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/companyPaidInfo?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCompanyPaidInfo(data)
            })
    }, [user?.email])

    console.log("Company paid info", companyPaidInfo);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Buyer Email</th>
                            <th>Transaction Id</th>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Flight id</th>
                            <th>time</th>
                            <th>Flight Date</th>
                            <th>seat</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            companyPaidInfo.map(item => <DisplayCompanyPaidInfo key={item._id} item={item}></DisplayCompanyPaidInfo>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedFlight;