import { useQueryClient } from "@tanstack/react-query";
import { resetClients } from "../adapters/ClientsAdapter.js";
import { Button } from "@radix-ui/themes";

export default function LogoutButton() {
  const queryClient = useQueryClient();
  const logout = () => {
    resetClients();
    queryClient.setQueryData(["userAddress"], null);
    queryClient.invalidateQueries({ queryKey: ["userAddress"] });
  };
  return <Button onClick={logout}>Logout</Button>;
}
