import { useQuery } from "@tanstack/react-query";

import { getTokenAddress, getTokenTotalSupply } from "../adapters/ClientsAdapter.js";

export default function useGetTokenTotalSupply() {
  const tokenAddress = getTokenAddress();

  const getTotalSupply = async () => {
    const totalSupply = await getTokenTotalSupply(tokenAddress);
    return totalSupply.toString();
  };

  return useQuery({
    queryKey: ["totalSupply"],
    queryFn: getTotalSupply,
    refetchInterval: 60000,
  });
}
