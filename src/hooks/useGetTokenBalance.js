import { useQuery } from "@tanstack/react-query";

import {
  getTokenAddress,
  getTokenBalance,
} from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";

export default function useGetTokenBalance() {
  const { data: userAddress } = useGetUserAddress();

  const _getTokenBalance = async () => {
    const tokenBalance = await getTokenBalance(getTokenAddress(), userAddress);
    return tokenBalance.toString();
  };

  return useQuery({
    queryKey: ["tokenBalance", userAddress],
    queryFn: _getTokenBalance,
    enabled: userAddress ? true : false,
    refetchInterval: 60000,
  });
}
