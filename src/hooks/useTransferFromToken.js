import { useMutation } from "@tanstack/react-query";

import {
  getTokenAddress,
  transferFromToken,
} from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";
import TransactionToast from "../components/TransactionToast/TransactionToast.jsx";

export default function useTransferFromToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ sender, recipient, amount }) =>
      transferFromToken(tokenAddress, userAddress, sender, recipient, amount),
    onSuccess: (hash) => {
      toast.custom(<TransactionToast message="TransferFrom transaction sent. Transaction hash:" hash={hash} />);
    },
    onError: (error) => {
      toast.error("TransferFrom transaction failed");
      console.error("TransferFrom transaction failed", error);
    },
  });
}
