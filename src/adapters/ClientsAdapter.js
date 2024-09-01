import { createWalletClient, createPublicClient, custom } from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

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

export async function getBalance(anAddress) {
  return await window.publicClient.getBalance({ address: anAddress });
}

export function getIsLoggedIn() {
  return window.publicClient && window.walletClient;
}

export function resetClients() {
  window.walletClient = null;
  window.publicClient = null;
}

export async function getChainId() {
  return getIsLoggedIn() ? await window.publicClient.getChainId() : 0;
}

export async function isBadNetwork() {
  return getIsLoggedIn() && (await getChainId()) !== sepolia.id;
}

export async function isBadNetworkBis() {
  return getIsLoggedIn() && (await getChainId()) !== sepolia.id;
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
