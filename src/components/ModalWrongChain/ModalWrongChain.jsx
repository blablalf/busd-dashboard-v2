import ReactModal from "react-modal";
import { switchChain } from "../../adapters/ClientsAdapter.js";
import useCheckRightChain from "../../hooks/useCheckRightChain.js";

import "./ModalWrongChain.css";
import { useEffect } from "react";
import LogoutButton from "../LogoutButton.jsx";

ReactModal.setAppElement("#root");

const ModalWrongChain = () => {
  // const [chainId, setChainId] = useState(null);

  const isRightChain = useCheckRightChain();

  useEffect(() => {
    if (!isRightChain) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isRightChain]);

  return (
    <ReactModal
      isOpen={!isRightChain}
      shouldCloseOnOverlayClick={false}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Wrong Network</h2>
      {/* <p>You are connected to the following chainId: {chainId}</p> */}
      <div class="button-container">
        <button onClick={switchChain}>Change to Sepolia network</button>
        <LogoutButton />
      </div>
    </ReactModal>
  );
};

export default ModalWrongChain;
