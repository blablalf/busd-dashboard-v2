import useIsLoggedIn from "../../hooks/useIsLoggedIn.js";
import useIsUserOwner from "../../hooks/useIsUserOwner.js";
import Allowance from "../Allowance.jsx";
import Approve from "../Approve.jsx";
import Burn from "../Burn.jsx";
import Mint from "../Mint.jsx";
import NotConnected from "../NotConnected/NotConnected.jsx";
import Owner from "../Owner.jsx";
import Transfer from "../Transfer.jsx";
import TransferFrom from "../TransferFrom.jsx";
import TransferOwnership from "../TransferOwnership.jsx";
import UserHeader from "../UserHeader/UserHeader.jsx";

import "./Home.css";

export default function Home() {
  const isLoggedIn = useIsLoggedIn();
  const isUserOwner = useIsUserOwner();

  return (
    <div>
      {isLoggedIn ? (
        <div class="home-container">
          <UserHeader />
          <div class="double-action-container" id="manage-supply">
            <Mint />
            <Burn />
          </div>
          <div class="double-action-container" id="manage-approvals">
            <Approve />
            <Allowance />
          </div>
          <div class="double-action-container" id="manage-transfers">
            <Transfer />
            <TransferFrom />
          </div>
          {isUserOwner ? (
            <div class="double-action-container" id="manage-ownership">
              <Owner />
              <TransferOwnership />
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <NotConnected />
      )}
    </div>
  );
}
