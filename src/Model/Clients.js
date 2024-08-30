// client.js

import { createWalletClient, createPublicClient, custom } from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

export async function getWallets() {
    let transport;
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            transport = custom(window.ethereum);
            console.log("Wallet connected successfully!");
        } catch (error) {
            console.error("User denied wallet connection", error);
            throw new Error("User denied wallet connection");
        }
    } else {
        const errorMessage = "No Web3 wallet detected.";
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const walletClient = createWalletClient({
        chain: sepolia,
        transport: transport,
    });
    const publicClient = createPublicClient({
        chain: sepolia,
        transport: transport,
    });

    return (walletClient, publicClient);
}
