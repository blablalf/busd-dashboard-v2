import useIsLoggedIn from "../hooks/useIsLoggedIn.js";
import Mint from "./Mint.jsx";
import UserHeader from "./UserHeader.jsx";

export default function Home() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <UserHeader />
          <Mint />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
