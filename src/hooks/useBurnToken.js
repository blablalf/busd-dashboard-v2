import { useMutation } from "@tanstack/react-query";

import { burnToken, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useBurnToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();
  return useMutation({
    mutationFn: (amount) => burnToken(tokenAddress, userAddress, amount),
    onSuccess: (hash) => {
      console.log(hash);
      toast.success("Burn transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Burn transaction failed");
    },
  });
}
