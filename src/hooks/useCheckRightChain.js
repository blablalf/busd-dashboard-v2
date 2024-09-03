import { isRightChainId } from "../adapters/ClientsAdapter.js";
import useGetChainId from "./useGetChainId.js";

export default function useCheckRightChain() {
  const { data } = useGetChainId();
  // if chainId is not loaded yet, return true to avoid blocking the UI
  return data === undefined ? true : isRightChainId(data);
}
