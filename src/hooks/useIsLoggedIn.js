import useGetUserAddress from "./useGetUserAddress.js";

export default function useIsLoggedIn() {
  const { data } = useGetUserAddress();
  console.log("isLoggedIn", data);
  return data ? true : false;
}
