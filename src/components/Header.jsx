import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";
import UserAddress from "./UserAddress.jsx";
import useIsLoggedIn from "../hooks/useIsLoggedIn.js";
import RefreshButton from "./RefreshButton.jsx";
import { Heading } from "@radix-ui/themes";

export default function Header() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <header>
      <Heading>BUSD-Dashboard</Heading>
      {isLoggedIn ? (
        <>
          <RefreshButton />
          <UserAddress />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
