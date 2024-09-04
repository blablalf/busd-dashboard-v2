import { useQueryClient } from "@tanstack/react-query";

export default function RefreshButton() {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries(); // Invalidate all queries
  };

  return <button onClick={refresh}>Refresh data</button>;
}
