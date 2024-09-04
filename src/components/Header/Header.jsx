import LoginButton from "../LoginButton.jsx";
import LogoutButton from "../LogoutButton.jsx";
import UserAddress from "../UserAddress/UserAddress.jsx";
import useIsLoggedIn from "../../hooks/useIsLoggedIn.js";
import RefreshButton from "../RefreshButton.jsx";

import "./Header.css";
import useIsUserOwner from "../../hooks/useIsUserOwner.js";

export default function Header() {
  const isLoggedIn = useIsLoggedIn();
  const isUserOwner = useIsUserOwner();
  return (
    <header>
      <h1>BUSD - Dashboard</h1>
      {isLoggedIn ? (
        <>
          <RefreshButton />
          <a href="#manage-supply">Manage Supply</a>
          <a href="#manage-approvals">Manage Approvals</a>
          <a href="#manage-supply">Manage Transfers</a>
          {isUserOwner ? <a href="#manage-supply">Manage Ownership</a> : <></>}
          <UserAddress />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
