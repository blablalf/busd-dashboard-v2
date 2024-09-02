import { useQuery } from "@tanstack/react-query";

import { getChainId } from "../adapters/ClientsAdapter.js";

export default function useGetChainId() {
  return useQuery({
    queryKey: ["chainId"],
    queryFn: getChainId,
    refetchInterval: 1000
  });
}
