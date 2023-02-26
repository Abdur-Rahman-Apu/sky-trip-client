import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useBooked = () => {

    const { user } = useContext(AuthContext)

    const { data: booked, refetch: bookedRefetch } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/booked?email=${user?.email}`)
            const data = response.json()
            return data
        }
    })

    return [booked, bookedRefetch]
};

export default useBooked;