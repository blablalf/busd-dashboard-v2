import { useMutation } from "@tanstack/react-query";

import { burnToken, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";
import TransactionToast from "../components/TransactionToast/TransactionToast.jsx";

export default function useBurnToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();
  return useMutation({
    mutationFn: (amount) => burnToken(tokenAddress, userAddress, amount),
    onSuccess: (hash) => {
      toast.custom(<TransactionToast message="Burn transaction sent. Transaction hash:" hash={hash} />);
    },
    onError: (error) => {
      toast.error("Burn transaction failed");
      console.error("Burn transaction failed", error);
    },
  });
}
