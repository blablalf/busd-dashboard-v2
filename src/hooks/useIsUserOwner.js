import useGetTokenOwner from "./useGetTokenOwner.js";
import useGetUserAddress from "./useGetUserAddress.js";

export default function useIsUserOwner() {
    const { data: userAddress } = useGetUserAddress();
    const { data: owner } = useGetTokenOwner();
  return userAddress === owner ? true : false;
}
