import useLogin from "../hooks/useLogin";

export default function LoginButton() {
  const { mutate } = useLogin();

  return <button onClick={mutate}>Connect</button>;
}
