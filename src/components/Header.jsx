import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";
import UserAddress from "./UserAddress.jsx";
import useIsLoggedIn from "../hooks/useIsLoggedIn.js";

export default function Header() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <header>
      <h1>BUSD-Dashboard</h1>
      {isLoggedIn ? (
        <>
          <UserAddress />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
