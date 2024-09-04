// import { useState } from "react";
// import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useBurnToken from "../hooks/useBurnToken";
import { getStep } from "../utils/Decimals";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { parseUnits } from "viem";

export default function Burn() {
  // const [amount, setAmount] = useState();
  const { mutate: burn } = useBurnToken();
  const { data: tokenDecimals } = useGetTokenDecimals();
  const stepValue = getStep(tokenDecimals);
  // useWatchBurnEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseUnits(amount, tokenDecimals);
    burn(parsedAmount);
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Burn tokens!</h3>
      <input
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <button type="submit">Burn</button>
    </form>
  );
}
