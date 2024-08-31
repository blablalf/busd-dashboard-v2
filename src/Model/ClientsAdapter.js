// client.js

import { createWalletClient, createPublicClient, custom } from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

let connected = false;
let walletClient;
let publicClient;

export async function initClient() {
    if (!connected) {
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

        walletClient = createWalletClient({
            chain: sepolia,
            transport: transport,
        });
        publicClient = createPublicClient({
            chain: sepolia,
            transport: transport,
        });
        return true;
    } else {
        console.log("Wallet already connected");
        return false;
    }
};

export async function getAddress() {
    return await walletClient.getAddresses();
};

export async function getBalance(anAddress) {
    return await publicClient.getBalance({ address: anAddress });
};

export function isInitiated() {
    return connected;
}

export async function getChainId() {
    return await publicClient.getChainId();
}

export async function isBadNetwork() {
    return isInitiated && await getChainId() !== sepolia.id;
}
