import useTransferToken from "../hooks/useTransferToken";
import { getStep } from "../utils/Decimals";
import useGetTokenDecimals from "../hooks/useGetTokenDecimals";
import { parseUnits } from "viem";

export default function Transfer() {
  const { mutate: transfer } = useTransferToken();
  const { data: tokenDecimals } = useGetTokenDecimals();
  const stepValue = getStep(tokenDecimals);
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseUnits(amount, tokenDecimals);
    const recipient = event.target.elements.recipient.value;
    transfer({ to: recipient, amount: parsedAmount });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Transfer tokens!</h3>
      <input type="text" placeholder="Recipient" name="recipient" />
      <input
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <button type="submit">Transfer</button>
    </form>
  );
}
