import { useState } from "react";
// import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useBurnToken from "../hooks/useBurnToken";

export default function Burn() {
  const [amount, setAmount] = useState();
  const { mutate: burn } = useBurnToken();
  // useWatchBurnEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    burn(parsedAmount);
    setAmount(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Burn tokens!</h3>
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">Burn</button>
    </form>
  );
}
