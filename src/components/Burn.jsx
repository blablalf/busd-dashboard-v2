import { useState } from "react";
import useGetEtherBalance from "../hooks/useGetEtherBalance";
import useGetTokenBalance from "../hooks/useGetTokenBalance";
import useGetTokenTotalSupply from "../hooks/useGetTokenTotalSupply";
// import useWatchMintEvent from "../hooks/useWatchMintEvent";
import useBurnToken from "../hooks/useBurnToken";

export default function Burn() {
  const [amount, setAmount] = useState();
  const { mutate: burn } = useBurnToken();
  const { data: balance } = useGetTokenBalance();
  console.log("token balance :" + balance);
  const { data: totalSupply } = useGetTokenTotalSupply();
  console.log("token total supply :" + totalSupply);
  const { data: etherBalance } = useGetEtherBalance();
  console.log("ether balance :" + etherBalance);
  // useWatchBurnEvent(amount);

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    console.log(parsedAmount);
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
