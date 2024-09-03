import useGetTokenOwner from "../hooks/useGetTokenOwner";

export default function Owner() {
  const { data: owner } = useGetTokenOwner();

  return (
      <p>Current owner: {owner}</p>
  );
}
