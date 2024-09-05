import ModalWrongChain from "./ModalWrongChain/ModalWrongChain";

import useIsLoggedIn from "../hooks/useIsLoggedIn";

export default function Modals() {
  const isLoggedIn = useIsLoggedIn();
  return (
    <>
      {/* Render modals when wallet connected */}
      {isLoggedIn ? (
        <>
          <ModalWrongChain />
        </>
      ) : null}
    </>
  );
}
