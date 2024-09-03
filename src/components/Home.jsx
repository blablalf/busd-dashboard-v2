import useIsLoggedIn from "../hooks/useIsLoggedIn.js";
import useIsUserOwner from "../hooks/useIsUserOwner.js";
import Allowance from "./Allowance.jsx";
import Approve from "./Approve.jsx";
import Burn from "./Burn.jsx";
import Mint from "./Mint.jsx";
import Owner from "./Owner.jsx";
import Transfer from "./Transfer.jsx";
import TransferFrom from "./TransferFrom.jsx";
import TransferOwnership from "./TransferOwnership.jsx";
import UserHeader from "./UserHeader.jsx";

export default function Home() {
  const isLoggedIn = useIsLoggedIn();
  const isUserOwner = useIsUserOwner();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <UserHeader />
          <Mint />
          <Allowance />
          <Transfer />
          <Approve />
          <TransferFrom />
          <Burn />
          {isUserOwner ? (
            <div>
              <Owner />
              <TransferOwnership />
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
