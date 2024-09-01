import { useMutation, useQueryClient } from "@tanstack/react-query";

import { clientLogin } from "../adapters/ClientsAdapter.js";

export default function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: clientLogin,
    onSuccess: (userAddress) =>
      queryClient.setQueryData(["userAddress"], userAddress),
  });
}
