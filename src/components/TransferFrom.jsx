import useTransferFromToken from "../hooks/useTransferFromToken";

export default function TransferFrom() {
  const { mutate: transferFromm } = useTransferFromToken();
  // useWatchTransferEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    const recipient = event.target.elements.recipient.value;
    const sender = event.target.elements.sender.value;
    transferFromm({ sender: sender, recipient: recipient, amount: parsedAmount });
    // setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>TransferFrom tokens!</h3>
      <input type="text" placeholder="Sender" name="sender" />
      <input type="text" placeholder="Recipient" name="recipient" />
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">TransferFrom</button>
    </form>
  );
}
