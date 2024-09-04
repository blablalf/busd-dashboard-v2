import useTransferFromToken from "../hooks/useTransferFromToken";
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
      <h3>TransferFrom tokens!</h3>
      <input type="text" placeholder="Sender" name="sender" />
      <input type="text" placeholder="Recipient" name="recipient" />
      <input
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <button type="submit">TransferFrom</button>
    </form>
  );
}
