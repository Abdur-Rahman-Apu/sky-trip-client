import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

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


    return (
        <div>

        </div>
    );
};

export default BookedFlight;