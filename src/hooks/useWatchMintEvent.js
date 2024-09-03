import { useEffect } from "react";
import { getTokenAddress, watchMintEvent } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import { useQueryClient } from "@tanstack/react-query";

export default function useWatchMintEvent() {
  const { data: userAddress } = useGetUserAddress();
  const queryClient = useQueryClient();

  useEffect(() => {
    const refetchBalance = () => {
      queryClient.invalidateQueries(["tokenBalance", userAddress]);
    };
    const unlisten = watchMintEvent(getTokenAddress(), userAddress, refetchBalance);
    return () => {
      unlisten();
    };
  }, [queryClient, userAddress]);
}
