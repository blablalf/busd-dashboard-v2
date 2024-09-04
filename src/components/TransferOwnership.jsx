// import { useState } from "react";
import useTransferOwnership from "../hooks/useTransferOwnership";

export default function TransferOwnership() {
  // const [owner, setOwner] = useState();
  const { mutate: transferOwner } = useTransferOwnership();
  // useWatchTransferOwnershipEvent(newOwner);

  function onSubmit(event) {
    event.preventDefault();
    const owner = event.target.elements.owner.value;
    transferOwner(owner);
    // setOwner(owner);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Transfer ownership</h3>
      <input type="text" placeholder="New owner" name="owner" />
      <button type="submit">Transfer Owner</button>
    </form>
  );
}
