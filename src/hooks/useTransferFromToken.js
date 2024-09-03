import { useMutation } from "@tanstack/react-query";

import { getTokenAddress, transferFromToken } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useTransferFromToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ sender, recipient, amount }) =>
      transferFromToken(tokenAddress, userAddress, sender, recipient, amount),
    onSuccess: (hash) => {
      console.log(hash);
      toast.success("TransferFrom transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      console.log(error);
      toast.error("TransferFrom transaction failed");
    },
  });
}
