import useApproveToken from "../hooks/useApproveToken";

export default function Approve() {
  const { mutate: approve } = useApproveToken();
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    const spender = event.target.elements.spender.value;
    approve({ spender: spender, amount: parsedAmount });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Approve addresses!</h3>
      <input type="text" placeholder="Spender" name="spender" />
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">Approve</button>
    </form>
  );
}
