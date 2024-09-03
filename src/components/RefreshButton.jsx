import { useQueryClient } from "@tanstack/react-query";

export default function RefreshButton() {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries({
      queryKey: [
        "tokenBalance",
        "tokenName",
        "userAddress",
        "totalSupply",
        "tokenOwner",
        "etherBalance",
        "allowance",
        "chainId",
      ],
    });
  };

  return <button onClick={refresh}>Refresh data</button>;
}
