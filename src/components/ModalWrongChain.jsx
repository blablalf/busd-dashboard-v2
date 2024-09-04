import ReactModal from "react-modal";
import { switchChain } from "../adapters/ClientsAdapter.js";
import useCheckRightChain from "../hooks/useCheckRightChain.js";
import { Button } from "@radix-ui/themes";

ReactModal.setAppElement("#root");

const ModalWrongChain = () => {
  // const [chainId, setChainId] = useState(null);

  const isRightChain = useCheckRightChain();

  return (
    <ReactModal
      isOpen={!isRightChain}
      shouldCloseOnOverlayClick={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "4px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <h2>Wrong Network</h2>
      {/* <p>You are connected to the following chainId: {chainId}</p> */}
      <Button onClick={switchChain}>Change to Sepolia network</Button>
    </ReactModal>
  );
};

export default ModalWrongChain;
