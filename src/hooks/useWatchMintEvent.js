import { useEffect } from "react";
import { getTokenAddress, watchMintEvent } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import { useQueryClient } from "@tanstack/react-query";

export default function useWatchMintEvent(amount) {
  const { data: userAddress } = useGetUserAddress();
  const queryClient = useQueryClient();

  useEffect(() => {
    const refetchBalance = () => {
      queryClient.invalidateQueries(["tokenBalance", userAddress]);
    };
    const unlisten = watchMintEvent(getTokenAddress(), userAddress, amount, refetchBalance);
    console.log("watching mint event");
    return () => {  
      unlisten();
    };
  }, [queryClient, userAddress, amount]);
}
