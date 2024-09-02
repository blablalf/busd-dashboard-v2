import useGetUserAddress from "../hooks/useGetUserAddress";
import useCheckChainId from "../hooks/useGetChainId";

export default function UserAddress() {
  const { data } = useGetUserAddress();
  useCheckChainId();

  return <p>{data}</p>;
}
