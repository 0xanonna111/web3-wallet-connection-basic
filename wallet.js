import { getProvider } from "./web3.js";

export async function connectWallet() {
  const provider = getProvider();
  const accounts = await provider.send("eth_requestAccounts", []);
  return accounts[0];
}

export async function getBalance(address) {
  const provider = getProvider();
  const balance = await provider.getBalance(address);
  return balance.toString();
}

export async function sendTransaction() {
  const provider = getProvider();
  const signer = await provider.getSigner();

  const tx = {
    to: signer.address,
    value: 0
  };

  await signer.sendTransaction(tx);
  alert("Transaction sent");
}
