import useTransferFromToken from "../hooks/useTransferFromToken";
import { Button, Text, TextField } from "@radix-ui/themes";
import { getStep } from "../utils/Decimals";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { parseUnits } from "viem";

export default function TransferFrom() {
  const { mutate: transferFromm } = useTransferFromToken();
  const { data: tokenDecimals } = useGetTokenDecimals();
  const stepValue = getStep(tokenDecimals);
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseUnits(amount, tokenDecimals);
    const recipient = event.target.elements.recipient.value;
    const sender = event.target.elements.sender.value;
    transferFromm({
      sender: sender,
      recipient: recipient,
      amount: parsedAmount,
    });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Text>TransferFrom tokens!</Text>
      <TextField.Root type="text" placeholder="Sender" name="sender" />
      <TextField.Root type="text" placeholder="Recipient" name="recipient" />
      <TextField.Root
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <Button type="submit">TransferFrom</Button>
    </form>
  );
}
