import useApproveToken from "../hooks/useApproveToken";
import { Button, Text, TextField } from "@radix-ui/themes";
import { getStep } from "../utils/Decimals";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { parseUnits } from "viem";

export default function Approve() {
  const { mutate: approve } = useApproveToken();
  const { data: tokenDecimals } = useGetTokenDecimals();
  const stepValue = getStep(tokenDecimals);
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseUnits(amount, tokenDecimals);
    const spender = event.target.elements.spender.value;
    approve({ spender: spender, amount: parsedAmount });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Text>Approve addresses!</Text>
      <TextField.Root type="text" placeholder="Spender" name="spender" />
      <TextField.Root
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <Button type="submit">Approve</Button>
    </form>
  );
}
