import { useMutation } from "@tanstack/react-query";

import { approveToken, getTokenAddress } from "../adapters/ClientsAdapter.js";
import useGetUserAddress from "./useGetUserAddress.js";
import toast from "react-hot-toast";

export default function useApproveToken() {
  const tokenAddress = getTokenAddress();
  const { data: ownerAddress } = useGetUserAddress();

  return useMutation({
    mutationFn: ({ spender, amount }) =>
      approveToken(tokenAddress, ownerAddress, spender, amount),
    onSuccess: (hash) => {
      toast.success("Approve transaction sent. Transaction hash: " + hash);
    },
    onError: (error) => {
      toast.error("Approve transaction failed");
    },
  });
}
