import { useMutation } from "@tanstack/react-query";

import {
  getTokenAddress,
  transferOwnership,
} from "../adapters/ClientsAdapter.js";
import toast from "react-hot-toast";
import useGetUserAddress from "./useGetUserAddress.js";
import TransactionToast from "../components/TransactionToast/TransactionToast.jsx";

export default function useTransferOwnership() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: (newOwner) =>
      transferOwnership(tokenAddress, userAddress, newOwner),
    onSuccess: (hash) => {
      toast.custom(<TransactionToast message="TransferOwnership transaction sent. Transaction hash:" hash={hash} />);
    },
    onError: (error) => {
      toast.error("TransferOwnership transaction failed");
      console.error("TransferOwnership transaction failed", error);
    },
  });
}
