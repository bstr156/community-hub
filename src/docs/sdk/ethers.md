---
title: ethers.js
lang: en-US
---

[ethers.js](https://docs.ethers.org/v5/) is a JavaScript library that allows developers to interact with EVM-compatible blockchain networks.

You can use ethers.js to interact with smart contracts deployed on Rollux.


## Install

Run the following command:

``` bash
npm install --save ethers
```

## Setup

Before you can start using ethers.js, you need to import it into your project.

Add the following line of code to the top of your file to import ethers.js:

``` javascript
const ethers = require('ethers');
```

## Connect to Rollux

You can connect to Rollux by instantiating a new ethers.js JsonRpcProvider object with a RPC URL of the Rollux network:

``` javascript
const ethers = require('ethers');

const url = 'https://rpc.rollux.com';
const provider = new ethers.providers.JsonRpcProvider(url);
```
::: info
Rate limiting is applied to the above public RPC server. If you are seeking premium RPC/WSS service for your dapp, refer to our list of [providers](../useful-tools/providers/).
:::

::: info
You can use the Rollux testnet by replacing the above RPC URL with `https://rpc-tanenbaum.rollux.com`.
:::

## Read data from Rollux

Once you have created a provider, you can use it to read data from the Rollux network.

For example, you can use the `getBlockNumber` method to get the latest block:

``` javascript
async function getLatestBlock() {
  const latestBlock = await provider.getBlockNumber();
  console.log(latestBlock);
}
```

## Write data to the blockchain

In order to write data to Rollux, you need to create a Signer.

You can create a Signer by instantiating a new ethers.js Wallet object, providing it with a private key and Provider.

``` javascript
const privateKey = 'PRIVATE_KEY';
const signer = new ethers.Wallet(privateKey, provider);
```
::: warning
PRIVATE_KEY is the private key of the wallet to use when creating the account. We highly recommend using the `dotenv` package to help conceal private keys used in your code.
:::

## Interact with smart contracts

You can use ethers.js to interact with a smart contract on Rollux by instantiating a Contract object using the ABI and address of a deployed contract:

``` javascript
const abi = [
… // ABI of deployed contract
];

const contractAddress = "CONTRACT_ADDRESS"

// read only
const contract = new ethers.Contract(contractAddress, abi, provider);
```

For write-only contracts, provide a Signer object instead of a Provider object:

``` javascript
// write only
const contract = new ethers.Contract(contractAddress, abi, signer);
```
::: info
CONTRACT_ADDRESS is the address of the deployed contract.
:::

Once you have created a Contract object, you can use it to call desired methods on the smart contract:

``` javascript
async function setValue(value) {
  const tx = await contract.set(value);
  console.log(tx.hash);
}

async function getValue() {
  const value = await contract.get();
  console.log(value.toString());
}
```
::: info
For guides on deploying contracts on Rollux, see the [tutorial](https://github.com/SYS-Labs/rollux-tutorial/blob/main/getting-started/README.md).
:::