import { useQuery } from "@tanstack/react-query";

import { getTokenAddress, getTokenDecimals } from "../adapters/ClientsAdapter.js";

export default function useGetTokenDecimals() {
  return useQuery({
    queryKey: ["tokenDecimals"],
    queryFn: () => getTokenDecimals(getTokenAddress()),
    refetchInterval: 60000,
  });
}
