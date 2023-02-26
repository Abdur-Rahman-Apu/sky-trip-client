import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query'

const useUser = (email) => {
    const [users, setUsers] = useState(null)


    const { data, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users`)
            const data = response.json()
            return data
        }
    })



    return [data, refetch]
};

export default useUser;