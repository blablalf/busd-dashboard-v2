import { createWalletClient, createPublicClient, custom } from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

import { tokenAbi } from "../abis/token.js";

export function getIsLoggedIn() {
  return window.publicClient && window.walletClient;
}

export function resetClients() {
  window.walletClient = null;
  window.publicClient = null;
}

export function isRightChainId(chainId) {
  return chainId === sepolia.id;
}

export function getTokenAddress() {
  return process.env.REACT_APP_TOKEN_ADDRESS;
}

export function watchMintEvent(tokenAddress, toAddress, onLogs) {
  return window.publicClient.watchContractEvent({
    address: tokenAddress,
    abi: tokenAbi,
    eventName: "Transfer",
    args: { to: toAddress },
    onLogs,
  });
}

export async function clientLogin() {
  let transport;
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
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

  window.walletClient = walletClient;
  window.publicClient = publicClient;

  const userAddress = await getUserAddress();

  return userAddress;
}

export async function getUserAddress() {
  const addresses = await window.walletClient.getAddresses();
  return addresses[0];
}

export async function getEtherBalance(accountAddress) {
  return await window.publicClient.getBalance({ address: accountAddress });
}

export async function getChainId() {
  return await window.publicClient.getChainId();
}

export async function getTokenName(tokenAddress) {
  const name = await window.publicClient.readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "name",
  });
  return name;
}

export async function getTokenBalance(tokenAddress, userAddress) {
  const balance = await window.publicClient.readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [userAddress],
  });
  return balance;
}

export async function getTokenTotalSupply(tokenAddress) {
  const balance = await window.publicClient.readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "totalSupply",
  });
  return balance;
}

export async function switchChain() {
  try {
    await window.walletClient.switchChain({ id: sepolia.id });
    console.log("Successfully switched to targeted chain");
  } catch (error) {
    if (error.code === 4902) {
      console.log("Chain not available");
      try {
        await window.walletClient.addChain({ chain: sepolia });
      } catch (error) {
        console.error("Failed to add chain", error);
      }
    }
  }
}

export async function mintToken(tokenAddress, userAddress, amount) {
  return await window.walletClient.writeContract({
    address: tokenAddress,
    account: userAddress,
    abi: tokenAbi,
    functionName: "mint",
    args: [amount],
  });
}

