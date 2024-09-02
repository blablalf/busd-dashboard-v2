import useGetTokenName from "../hooks/useGetTokenName";
import { getTokenAddress } from "../adapters/ClientsAdapter";

export default function UserHeader() {
  const tokenAddress = getTokenAddress();
  const {data: tokenName} = useGetTokenName(tokenAddress);

  return (
    <div>
      <h3>{tokenName}</h3>
      <p>{tokenAddress}</p>
      {/* <InfoCard title={tokenName} info={tokenAddress} /> */}
    </div>
  );
}
