import useApproveToken from "../hooks/useApproveToken";
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
      <h3>Approve addresses!</h3>
      <input type="text" placeholder="Spender" name="spender" />
      <input
        type="number"
        step={stepValue ? stepValue : getStep(18)}
        min="0"
        placeholder="Amount"
        name="amount"
      />
      <button type="submit">Approve</button>
    </form>
  );
}
