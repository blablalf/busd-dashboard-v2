import useGetUserAddress from "../../hooks/useGetUserAddress";
import useCheckChainId from "../../hooks/useGetChainId";
import toast from "react-hot-toast";
import "./UserAddress.css";
import { FiClipboard, FiCopy } from "react-icons/fi";

export default function UserAddress() {
  const { data: userAddress } = useGetUserAddress();
  useCheckChainId();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(userAddress)
      .then(() => {
        toast.success("Address copied to clipboard");
      })
      .catch((err) => {
        console.error("failed to copy address", err);
      });
  };

  return (
    <button id="button-copy-address" onClick={handleCopy}>
      <FiCopy style={{ marginRight: '10px' }} />
      {userAddress.slice(0, 6) + "..." + userAddress.slice(-4)}
    </button>
  );
}
