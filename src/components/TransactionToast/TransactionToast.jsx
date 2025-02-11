import React from "react";
import { FcOk } from "react-icons/fc";

import "./TransactionToast.css";

const TransactionToast = ({ message, hash }) => {
  return (
    <div className="transaction-toast">
      <FcOk />
      <div>{message} </div>
      <a href={"https://sepolia.etherscan.io/tx/" + hash} target="_blank" rel="noopener noreferrer">{hash}</a>
    </div>
  );
};

export default TransactionToast;
