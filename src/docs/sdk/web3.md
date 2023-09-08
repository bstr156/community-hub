---
title: web3.js
lang: en-US
---

web3.js is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks.

You can use web3.js to interact with smart contracts deployed on Rollux.

## Install

To install the web3.js package, run:

```bash
npm install web3
```

## Setup

Before you can start using web3.js, you need to import it into your project.

Add the following line of code to the top of your file to import web3.js:

``` javascript
const Web3 = require('web3');
```

## Connect to Rollux

You can connect to Rollux by generating a new web3.js Web3 object with a RPC URL of the Rollux network:

``` javascript
const Web3 = require('web3');

//mainnet
const web3 = new Web3('https://rpc.rollux.com');

```
::: info
Rate limiting is applied to the above public RPC server. If you are seeking premium RPC/WSS service for your dapp, refer to our list of [providers](../useful-tools/providers/).
:::

::: info
You can use the Rollux testnet by replacing the above RPC URL with `https://rpc-tanenbaum.rollux.com`.
:::

### Access data

Once you have created a provider, you can use it to read data from the Rollux network.

For example, you can use the `getBlockNumber` method to get the latest block:

``` javascript
async function getLatestBlock(address) {
  const latestBlock = await web3.eth.getBlockNumber();
  console.log(latestBlock.toString());
}
```


### Deploy contracts

Before you can deploy a contract to the Rollux network using web3.js, you must first create an account.

You can create an account by using `web3.eth.accounts`:

``` javascript
const privateKey = “PRIVATE_KEY”;
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
```
::: warning
PRIVATE_KEY is the private key of the wallet to use when creating the account. We highly recommend using the `dotenv` package to help conceal private keys used in your code.
:::



### Interact with smart contracts

You can use web3.js to interact with a smart contract on Rollux by instantiating a `Contract` object using the ABI and address of a deployed contract:

``` javascript
const abi = [
… // ABI of deployed contract
];

const contractAddress = "CONTRACT_ADDRESS"

const contract = new web3.eth.Contract(abi, contractAddress);
```

Once you have created a `Contract` object, you can use it to call desired methods on the smart contract:

``` javascript
async function setValue(value) {
  // write query
  const tx = await contract.methods.set(value).send();
  console.log(tx.transactionHash);
}

async function getValue() {
  // read query
  const value = await contract.methods.get().call();
  console.log(value.toString());
}
```

::: info
For guides on deploying contracts on Rollux, see the [tutorial](https://github.com/SYS-Labs/rollux-tutorial/blob/main/getting-started/README.md).
:::