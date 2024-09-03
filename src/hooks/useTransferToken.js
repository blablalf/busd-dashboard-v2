import { useMutation } from "@tanstack/react-query";

import { getTokenAddress, transferToken } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useTransferToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ to, amount }) =>
      transferToken(tokenAddress, userAddress, to, amount),
    onSuccess: (hash) => {
      console.log(hash);
      toast.success("Transfer transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Transfer transaction failed");
    },
  });
}
