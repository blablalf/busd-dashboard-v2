import { getTokenAddress } from "../adapters/ClientsAdapter";

import useGetTokenName from "../hooks/useGetTokenName";
import useGetEtherBalance from "../hooks/useGetEtherBalance";
import useGetTokenBalance from "../hooks/useGetTokenBalance";
import useGetTokenTotalSupply from "../hooks/useGetTokenTotalSupply";

import { formatEther, formatUnits } from "viem";
import { Text } from "@radix-ui/themes";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { useEffect, useState } from "react";

export default function UserHeader() {
  const [formattedEtherBalance, setFormattedEtherBalance] = useState();
  const [formattedSupply, setFormattedSupply] = useState();
  const [formattedTokenBalance, setFormattedTokenBalance] = useState();

  const tokenAddress = getTokenAddress();

  const { data: tokenName } = useGetTokenName(tokenAddress);
  const { data: tokenDecimals } = useGetTokenDecimals(tokenAddress);
  const { data: tokenBalance } = useGetTokenBalance();
  const { data: totalSupply } = useGetTokenTotalSupply();
  const { data: etherBalance } = useGetEtherBalance();

  useEffect(() => {
    if (etherBalance) setFormattedEtherBalance(formatEther(etherBalance));
    if (totalSupply) setFormattedSupply(formatUnits(totalSupply, tokenDecimals));
    if (tokenBalance) setFormattedTokenBalance(formatUnits(tokenBalance, tokenDecimals));
  }, [etherBalance, totalSupply, tokenBalance, tokenDecimals]);

  return (
    <div>
      <Text>Ether balance: {formattedEtherBalance}</Text>
      <Text>
        {tokenName} total supply: {formattedSupply}
      </Text>
      <Text>
        {tokenName} balance: {formattedTokenBalance}
      </Text>
      <Text>
        {tokenName} address: {tokenAddress}
      </Text>
    </div>
  );
}
