import { useMutation } from "@tanstack/react-query";

import {
  getAllowance,
  getTokenAddress,
  transferFromToken,
} from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";
import TransactionToast from "../components/TransactionToast/TransactionToast.jsx";
import { formatUnits } from "viem";
import useGetTokenDecimals from "./useGetTokenDecimals.js";

export default function useTransferFromToken() {
  const tokenAddress = getTokenAddress();
  const { data: userAddress } = useGetUserAddress();
  const { data: decimals } = useGetTokenDecimals();

  const transferFrom = async (tokenAddress, spender, ownerAddress, recipient, amount) => {
    const allowance = await getAllowance(tokenAddress, ownerAddress, spender);
    if (allowance >= amount) {
      await transferFromToken(tokenAddress, userAddress, ownerAddress, recipient, amount);
    } else {
      const parsedAllowance = formatUnits(allowance, decimals);
      const error = new Error("You do not have enough allowance to do this. Current allowance: " + parsedAllowance);
      error.code = 2009;
      throw error;
    }
  };

  return useMutation({
    mutationFn: ({ sender, recipient, amount }) =>
      transferFrom(tokenAddress, userAddress, sender, recipient, amount),
    onSuccess: (hash) => {
      toast.custom(<TransactionToast message="TransferFrom transaction sent. Transaction hash:" hash={hash} />);
    },
    onError: (error) => {
      if (error.code === 2009) {
        toast.error(error.message);
      } else {
        toast.error("TransferFrom transaction failed");
        console.error("TransferFrom transaction failed", error);
      }
    },
  });
}
