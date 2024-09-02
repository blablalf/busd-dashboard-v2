import useIsLoggedIn from "../hooks/useIsLoggedIn.js";
import SideBar from "./Sidebar.jsx";

export default function Home() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <SideBar />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
