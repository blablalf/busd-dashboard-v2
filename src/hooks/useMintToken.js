import { useMutation } from "@tanstack/react-query";

import { mintToken, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useMintToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();
  return useMutation({
    mutationFn: (amount) => mintToken(tokenAddress, userAddress, amount),
    onSuccess: (hash) => {
      toast.success("Mint transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      toast.error("Mint transaction failed");
    },
  });
}
