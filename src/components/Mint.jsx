import useGetEtherBalance from "../hooks/useGetEtherBalance";
import useGetTokenBalance from "../hooks/useGetTokenBalance";
import useGetTokenTotalSupply from "../hooks/useGetTokenTotalSupply";
import useMintToken from "../hooks/useMintToken";
import useWatchMintEvent from "../hooks/useWatchMintEvent";

export default function Mint() {
  const { mutate: mint } = useMintToken();
  const { data: balance } = useGetTokenBalance();
  console.log("token balance :" + balance);
  const { data: totalSupply } = useGetTokenTotalSupply();
  console.log("token total supply :" + totalSupply);
  const { data: etherBalance } = useGetEtherBalance();
  console.log("ether balance :" + etherBalance);
  useWatchMintEvent();

  function onSubmit(event) {
    event.preventDefault();
    const amount = event.target.elements.amount.value;
    const parsedAmount = parseFloat(amount);
    console.log(parsedAmount);
    mint(parsedAmount);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Mint tokens!</h3>
      <input type="number" placeholder="Amount" name="amount" />
      <button type="submit">Mint</button>
    </form>
  );
}
