import { useMutation } from "@tanstack/react-query";

import {
  getTokenAddress,
  transferFromToken,
} from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useTransferFromToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ sender, recipient, amount }) =>
      transferFromToken(tokenAddress, userAddress, sender, recipient, amount),
    onSuccess: (hash) => {
      toast.success("TransferFrom transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      toast.error("TransferFrom transaction failed");
    },
  });
}
