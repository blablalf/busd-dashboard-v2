import { useState } from "react";
import useGetAllowance from "../hooks/useGetAllowance";

export default function Allowance() {
  const [spender, setSpender] = useState();
  const { data: allowance } = useGetAllowance(spender);

  function onSubmit(event) {
    event.preventDefault();
    setSpender(event.target.elements.spender.value);
    console.log("spender: " + spender);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Check a spender allowance!</h3>
      <input placeholder="Spender address" name="spender" />
      <button type="submit">Check</button>
      <p>Allowance: {allowance}</p>
    </form>
  );
}
