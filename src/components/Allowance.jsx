import { useEffect, useState } from "react";
import useGetAllowance from "../hooks/useGetAllowance";
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
      <h3>Check a spender allowance!</h3>
      <input placeholder="Spender address" name="spender" />
      <button type="submit">Check</button>
      <p>Allowance: {formattedAllowance}</p>
    </form>
  );
}
