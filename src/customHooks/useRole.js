import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useRole = () => {

    const [role, setRole] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://skytrip.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRole(data.identity)
            })
    }, [user?.email])
    return [role]
};

export default useRole;