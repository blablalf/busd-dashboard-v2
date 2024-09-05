import { useMutation } from "@tanstack/react-query";

import { getTokenAddress, transferToken } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";
import TransactionToast from "../components/TransactionToast/TransactionToast.jsx";

export default function useTransferToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ to, amount }) =>
      transferToken(tokenAddress, userAddress, to, amount),
    onSuccess: (hash) => {
      toast.custom(<TransactionToast message="Transfer transaction sent. Transaction hash:" hash={hash} />);
    },
    onError: (error) => {
      toast.error("Transfer transaction failed");
      console.error("Transfer transaction failed", error);
    },
  });
}
