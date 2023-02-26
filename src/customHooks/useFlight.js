import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useFlight = () => {

    const { user } = useContext(AuthContext)

    const { data: flights, refetch: flightRefetch } = useQuery({
        queryKey: ['allFlights'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/showAllFlight?email=${user?.email}`)
            const data = response.json()
            return data
        }
    })
    return [flights, flightRefetch]
};

export default useFlight;