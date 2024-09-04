// import { useState } from "react";
import useTransferOwnership from "../hooks/useTransferOwnership";
import { Button, Text, TextField } from "@radix-ui/themes";

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
      <Text>Transfer ownership</Text>
      <TextField.Root type="text" placeholder="New owner" name="owner" />
      <Button type="submit">Transfer Owner</Button>
    </form>
  );
}
