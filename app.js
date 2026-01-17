import { connectWallet, getBalance, sendTransaction } from "./wallet.js";

const connectBtn = document.getElementById("connectBtn");
const sendBtn = document.getElementById("sendBtn");

connectBtn.onclick = async () => {
  const address = await connectWallet();
  document.getElementById("address").innerText = "Address: " + address;
  const balance = await getBalance(address);
  document.getElementById("balance").innerText = "Balance: " + balance + " ETH";
};

sendBtn.onclick = async () => {
  await sendTransaction();
};
