import { useQuery } from "@tanstack/react-query";

import { getTokenName } from "../adapters/ClientsAdapter.js";

export default function useGetTokenName(tokenAddress) {
  return useQuery({ queryKey: ["tokenName", tokenAddress], queryFn: () => getTokenName(tokenAddress) });
}
