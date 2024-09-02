import useGetTokenName from "../hooks/useGetTokenName";
import InfoCard from "./InfoCard";
import { getTokenAddress } from "../adapters/ClientsAdapter";

export default function Sidebar() {
  const tokenAddress = getTokenAddress();
  const {data: tokenName} = useGetTokenName(tokenAddress);

  return (
    <div>
      <InfoCard title={tokenName} info={tokenAddress} />
    </div>
  );
}
