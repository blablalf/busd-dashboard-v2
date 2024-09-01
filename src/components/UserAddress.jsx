import useGetUserAddress from "../hooks/useGetUserAddress";

export default function UserAddress() {
  const {data} = useGetUserAddress();

  return <p>{data}</p>;
}
