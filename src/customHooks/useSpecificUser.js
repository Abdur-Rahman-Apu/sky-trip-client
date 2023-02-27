import { useQuery } from '@tanstack/react-query';

const useSpecificUser = (companyEmail) => {


    const { data: specificUser, refetch: refetchUser } = useQuery({
        queryKey: ['specificCompany'],
        queryFn: async () => {
            const response = await fetch(`https://skytrip.vercel.app/user?email=${companyEmail}`)
            const data = response.json()
            return data
        }
    })

    return [specificUser, refetchUser]
};

export default useSpecificUser;