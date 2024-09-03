import { useState } from "react";
import useMintToken from "../hooks/useMintToken";
import useWatchMintEvent from "../hooks/useWatchMintEvent";

export default function Mint() {
  const [amount, setAmount] = useState();
  const { mutate: mint } = useMintToken();
  useWatchMintEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    mint(parsedAmount);
    setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Mint tokens!</h3>
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">Mint</button>
    </form>
  );
}
