import { useQuery } from "@tanstack/react-query";

const useSpecificUser = (companyEmail) => {
  console.log(companyEmail, "conmpany email");
  const { data: specificUser, refetch: refetchUser } = useQuery({
    queryKey: ["specificCompany"],
    queryFn: async () => {
      const response = await fetch(
        `https://skytrip.vercel.app/user?email=${companyEmail}`
      );

      console.log(response, "response");
      const data = await response.json();

      console.log(data, "data");
      return data;
    },
  });

  console.log(specificUser, "specific user in hook");

  return [specificUser, refetchUser];
};

export default useSpecificUser;
