"use client";
import { useState } from "react";
import { initClient, getAddress, getBalance } from "../Model/ClientsAdapter.js";

import { formatEther } from "viem";

export default function WalletButton() {
	//State variable for address & balance
    const [address, setAddress] = useState(0);
	const [balance, setBalance] = useState(0);

    async function handleClick() {
        await initClient();
        try {
            const address_ = await getAddress();
            const balance_ = await getBalance(address_.toString());
            setAddress(address_);
            setBalance(balance_);
            console.log("address: " + address_);
            console.log("balance: " + balance_); 
        } catch (error) {
            alert(`Transaction failed: ${error}`);
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                <Status address={address} balance={balance} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask Fox" style={{ width: "25px", height: "25px" }} />
            </button>
        </>
    );
}

function formatAddress(_address) {
    if (!_address) return ''; // undefined or null
    let addressStr = _address.toString(); 

    const firstPart = addressStr.substring(0, 6);
    const lastPart = addressStr.substring(addressStr.length - 4);

    return firstPart + '...' + lastPart;
}

function Status({ address, balance }) {
    if (!address) {
        return (
            <div>
                <p>Disconnected</p>
            </div>
        );
    }

    return (
        <div>
            <p>{formatAddress(address)}</p>
            <br />
            <p>Balance: { formatEther(balance) }</p>
        </div>
    );
}
