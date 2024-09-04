// import { useState } from "react";
// import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useBurnToken from "../hooks/useBurnToken";
import { Button, Text, TextField } from "@radix-ui/themes";
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
      <Text>Burn tokens!</Text>
      <TextField.Root
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <Button type="submit">Burn</Button>
    </form>
  );
}
