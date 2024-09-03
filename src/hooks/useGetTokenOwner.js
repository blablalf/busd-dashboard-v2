import { useQuery } from "@tanstack/react-query";

import { getTokenAddress, getTokenOwner } from "../adapters/ClientsAdapter.js";

export default function useGetTokenOwner() {
  return useQuery({
    queryKey: ["tokenOwner"],
    queryFn: () => getTokenOwner(getTokenAddress()),
    refetchInterval: 60000,
  });
}
