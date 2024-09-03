import { useQuery } from "@tanstack/react-query";

import { getAllowance, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";

export default function useGetAllowance(spender) {
  const { data: userAddress } = useGetUserAddress();

  const getTokenAllowance = async () => {
    const allowance = await getAllowance(
      getTokenAddress(),
      userAddress,
      spender
    );
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
