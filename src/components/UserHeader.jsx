import { getTokenAddress } from "../adapters/ClientsAdapter";

import useGetTokenName from "../hooks/useGetTokenName";
import useGetEtherBalance from "../hooks/useGetEtherBalance";
import useGetTokenBalance from "../hooks/useGetTokenBalance";
import useGetTokenTotalSupply from "../hooks/useGetTokenTotalSupply";

export default function UserHeader() {
  const tokenAddress = getTokenAddress();
  const { data: tokenName } = useGetTokenName(tokenAddress);
  const { data: balance } = useGetTokenBalance();
  const { data: totalSupply } = useGetTokenTotalSupply();
  const { data: etherBalance } = useGetEtherBalance();

  return (
    <div>
      <h3>Ether balance: {etherBalance}</h3>
      <h3>
        {tokenName} total supply: {totalSupply}
      </h3>
      <h3>
        {tokenName} balance: {balance}
      </h3>
      <p>
        {tokenName} address: {tokenAddress}
      </p>
    </div>
  );
}
