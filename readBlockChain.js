const { ethers } = require("ethers");
const { JsonRpcProvider } = require("@ethersproject/providers");

// using infura to make connection between blockchain
const provider = new JsonRpcProvider(`https://mainnet.infura.io/v3/b88ece4a38fe403d9f873ab378243eae`);

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log(block);
}

queryBlockchain();
