import useLogin from "../hooks/useLogin";
import { Button } from "@radix-ui/themes";

export default function LoginButton() {
  const { mutate } = useLogin();

  return <Button onClick={mutate}>Connect</Button>;
}
