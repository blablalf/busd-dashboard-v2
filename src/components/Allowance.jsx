import { useEffect, useState } from "react";
import useGetAllowance from "../hooks/useGetAllowance";
import { Button, Text, TextField } from "@radix-ui/themes";
import { getTokenAddress } from "../adapters/ClientsAdapter";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { formatUnits } from "viem";

export default function Allowance() {
  const tokenAddress = getTokenAddress();

  const [spender, setSpender] = useState();
  const [formattedAllowance, setFormattedAllowance] = useState(0);
  const { data: allowance } = useGetAllowance(spender);
  const { data: tokenDecimals } = useGetTokenDecimals(tokenAddress);

  useEffect(() => {
    if (allowance) setFormattedAllowance(formatUnits(allowance, tokenDecimals));
  }, [allowance, tokenDecimals, formattedAllowance]);

  function onSubmit(event) {
    event.preventDefault();
    setSpender(event.target.elements.spender.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <Text>Check a spender allowance!</Text>
      <TextField.Root placeholder="Spender address"  name="spender" />
      <Button type="submit">Check</Button>
      <Text>Allowance: {formattedAllowance}</Text>
    </form>
  );
}
