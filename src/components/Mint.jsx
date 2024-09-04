import { parseUnits } from "viem";

import { useState } from "react";
import useMintToken from "../hooks/useMintToken";
import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { getStep } from "../utils/Decimals";

export default function Mint() {
  const [amount, setAmount] = useState();
  const { mutate: mint } = useMintToken();
  const { data: tokenDecimals } = useGetTokenDecimals();
  const stepValue = getStep(tokenDecimals);
  useWatchMintEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseUnits(amount, tokenDecimals);
    mint(parsedAmount);
    setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Mint tokens!</h3>
      <input
        type="number"
        step={stepValue ? stepValue: getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <button type="submit">Mint</button>
    </form>
  );
}
