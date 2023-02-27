import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useBooked = () => {

    const { user } = useContext(AuthContext)

    const { data: booked, refetch: bookedRefetch } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const response = await fetch(`https://skytrip.vercel.app/booked?email=${user?.email}`)
            const data = response.json()
            return data
        }
    })

    return [booked, bookedRefetch]
};

export default useBooked;