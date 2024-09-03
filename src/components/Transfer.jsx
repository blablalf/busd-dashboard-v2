import useTransferToken from "../hooks/useTransferToken";

export default function Transfer() {
  const { mutate: transfer } = useTransferToken();
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    const recipient = event.target.elements.recipient.value;
    transfer({ to: recipient, amount: parsedAmount });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Transfer tokens!</h3>
      <input type="text" placeholder="Recipient" name="recipient" />
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">Transfer</button>
    </form>
  );
}
