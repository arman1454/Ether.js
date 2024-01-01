const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/j8pR71uR77igUWtSTwIBPBe2WBaQRxuV`);

const contractAddress = "0xe810f6957cb89d047a1ff2a64c1ef35939d1e841";

const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contractInteraction = async()=>{
    const Contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const contractName = await Contract.name(); //it is basically the declared name variable in the contract code uint public name
    console.log(contractName);

    const num = await Contract.getValue();
    // const numInEther = await ethers.utils.formatEther(num);
    console.log(String(num));

    const contractBalance = await Contract.contractBalance();
    const contractBalanceInEther = await ethers.utils.formatEther(contractBalance);
    console.log(contractBalanceInEther);
    
    // const userBalance = await Contract.accountBalance("0x7DC08052a988f2bC75858BD0767F75C95128E080");
    // const userBalanceInEther = await ethers.utils.formatEther(userBalance);
    // console.log(userBalanceInEther); 
}

contractInteraction();