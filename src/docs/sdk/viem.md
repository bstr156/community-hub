---
title: viem
lang: en-US
---

viem is a TypeScript interface for Ethereum that provides low-level stateless primitives for interacting with Ethereum.

You can use viem to interact with smart contracts deployed on Rollux.

## Install

Run the following command:

``` bash
npm install --save viem
```

## Setup

Before you can start using viem, you need to setup a Client with a desired Transport and Chain.

``` typescript
import { createPublicClient, http } from 'viem';
import { rollux } from 'viem/chains';

const client = createPublicClient({
  chain: rollux,
  transport: http(),
});
```
::: info
To use Rollux Mainnet, specify `rollux` as the chain when creating a Client.

To use Rollux Tanenbaum (testnet), replace `rollux` with `rolluxTestnet`.
:::

## Read data from Rollux

Once you have created a client, you can use it to read and access data from Rollux using [Public Actions](https://viem.sh/docs/actions/public/introduction.html).

Public Actions are client methods that map one-to-one with a "public" Ethereum RPC method (`eth_blockNumber`, `eth_getBalance`, etc.)

For example, you can use the `getBlockNumber` client method to get the latest block:

``` typescript
const blockNumber = await client.getBlockNumber();
```

## Write data to Rollux

In order to write data, you need to create a Wallet client (`createWalletClient`) and specify an Account to use.

``` typescript
import { createWalletClient, custom } from 'viem'
import { rollux } from 'viem/chains'

const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })

const client = createWalletClient({
  account,
  chain: rollux,
  transport: custom(window.ethereum)
})

client.sendTransaction({ ... })
```

::: info
In addition to making a JSON-RPC request (`eth_requestAccounts`) to get an Account, viem provides various helper methods for creating an Account, including: `privateKeyToAccount`, `mnemonicToAccount`, and `hdKeyToAccount`.

To use Rollux Tanenbaum (testnet), replace `rollux` with `rolluxTestnet`.
:::

## Interact with smart contracts

You can use viem to interact with a smart contract on Rollux by creating a Contract instance using `getContract` and passing it the contract ABI, contract address, and and [Public](https://viem.sh/docs/clients/public.html) and/or [Wallet](https://viem.sh/docs/clients/wallet.html) Client:

``` typescript
import { getContract } from 'viem';
import { wagmiAbi } from './abi';
import { publicClient } from './client';

// 1. Create contract instance
const contract = getContract({
  address: 'CONTRACT_ADDRESS',
  abi: wagmiAbi,
  publicClient,
});

// 2. Call contract methods, listen to events, etc.
const result = await contract.read.totalSupply();
```
::: info
CONTRACT_ADDRESS is the address of the deployed contract.
:::

::: info
For guides on deploying contracts on Rollux, see the [tutorial](https://github.com/SYS-Labs/rollux-tutorial/blob/main/getting-started/README.md).
:::