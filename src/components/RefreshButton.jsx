import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@radix-ui/themes";

export default function RefreshButton() {
  const queryClient = useQueryClient();
  const refresh = () => {
    queryClient.invalidateQueries(); // Invalidate all queries
  };

  return <Button onClick={refresh}>Refresh data</Button>;
}
