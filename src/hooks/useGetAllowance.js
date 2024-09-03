import { useQuery } from "@tanstack/react-query";

import { getAllowance, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";

export default function useGetAllowance(spender) {
  const { data: userAddress } = useGetUserAddress();

  console.log("allowance:userAddress :" + userAddress);
  console.log("allowance:spender :" + spender);

  const getTokenAllowance = async () => {
    const allowance = await getAllowance(
      getTokenAddress(),
      userAddress,
      spender
    );
    console.log("allowance :" + allowance);
    return allowance.toString();
  };

  return useQuery({
    queryKey: ["allowance", userAddress, spender],
    queryFn: getTokenAllowance,
    enabled: userAddress && spender ? true : false,
    refetchInterval: 60000,
    initialData: "0",
  });
}
