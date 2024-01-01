const { ethers } = require("ethers");
const { JsonRpcProvider } = require("@ethersproject/providers");

// using infura to make connection between blockchain
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/b88ece4a38fe403d9f873ab378243eae`);

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log(block);

    const balance = await provider.getBalance("0xbEAb388DAa2B714e4c7C105811a86756Dc274115");

    // Convert the balance to a human-readable string (in Ether)
    const balanceEther = ethers.utils.formatEther(balance);
    console.log(balanceEther);

    const balanceWei = ethers.utils.parseEther(balanceEther);

    console.log(balanceWei);
}

queryBlockchain();
