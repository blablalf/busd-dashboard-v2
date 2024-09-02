import useGetUserAddress from "./useGetUserAddress.js";

export default function useIsLoggedIn() {
  const { data } = useGetUserAddress();
  return data ? true : false;
}
