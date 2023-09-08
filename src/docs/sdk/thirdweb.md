---
title: thirdweb SDK
lang: en-US
---

Thirdweb SDK is a library that enables developers to build web3 applications and interact with any EVM-compatible blockchain.

You can use the Thirdweb SDK to build apps and interact with smart contracts deployed on the Rollux network.

The thirdweb SDK is available in various programming languages, including: [React](https://portal.thirdweb.com/react), [React Native](https://portal.thirdweb.com/react-native), [TypeScript](https://portal.thirdweb.com/typescript), [Python](https://portal.thirdweb.com/python), [Go](https://portal.thirdweb.com/go), and [Unity](https://portal.thirdweb.com/unity).

Visit the [Thirdweb documentation](https://portal.thirdweb.com/cli) for more instructions on using the Thirdweb SDKs.

## Install

To install the Thirdweb SDK, run:

``` bash
npm install @thirdweb-dev/sdk ethers@5
```

## Initialize the SDK with Rollux

Here's how to initialize the SDK with the Rollux mainnet network and get a contract:

``` typescript
import { Rollux } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(Rollux, {
  clientId: "YOUR_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK(Rollux, {
  secretKey: "YOUR_SECRET_KEY",
});

const contract = await sdk.getContract("0x0000000000000000000000000000000000000000");
```
You will need to pass a client ID/secret key to use Thirdweb's infrastructure services. If you don't have any API keys yet you can create one for free from your Thirdweb [dashboard settings](https://thirdweb.com/dashboard/settings/api-keys).

## Interact with smart contracts

Once you initialize the SDK and connect to a smart contract deployed to Rollux, you can start calling functions on it using the SDK.

::: info
Any interaction you make with a smart contract will be made from the connected wallet automatically.
:::

### Use contract extension functions

The thirdweb SDK provides convenience functions when your smart contract uses [extensions](https://portal.thirdweb.com/contractkit/extensions). This is the easiest way to read data and write transactions with your smart contracts.

For example, if your contract implements the [ERC721](https://portal.thirdweb.com/contractkit/erc721) extension, you can utilize all of the functions of the [corresponding erc721 standard](https://portal.thirdweb.com/sdk/interacting-with-contracts/erc721) in the SDK.

As an example, below is a code snippet that uses [`useOwnedNFTs`](https://portal.thirdweb.com/react/react.useownednfts) hook to get a list of NFTs owned by a single wallet address:

``` typescript
import { useOwnedNFTs } from '@thirdweb-dev/react';

const { data, isLoading, error } = useOwnedNFTs(contract, '{{wallet_address}}');
```
#### Usage
``` typescript
import { useOwnedNFTs, useContract, useAddress } from '@thirdweb-dev/react';

// Your smart contract address
const contractAddress = '{{contract_address}}';

function App() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);
}
```
For more examples on using contract extension functions, visit the [Thirdweb developer documentation](https://portal.thirdweb.com/sdk/interacting-with-contracts#using-contract-extensions).

### Read contract data

If your contract doesn’t use any [extensions](https://portal.thirdweb.com/contractkit/extensions), or you want to directly call functions on your smart contract to read data, you can use the [`useContractRead`](https://portal.thirdweb.com/react/react.usecontractread) hook.

Read data on your contract from a connected wallet:
``` typescript
const { contract } = useContract('{{contract_address}}');
const { data: myData, isLoading } = useContractRead(contract, 'myFunction');
```

### Write to contracts

If your contract doesn’t use any extensions, or you want to directly call functions on your smart contract to write data, you can use the [`useContractWrite`](https://portal.thirdweb.com/react/react.usecontractwrite) hook.

Make transactions on your contract from a connected wallet:

``` typescript
const { contract } = useContract('{{contract_address}}');
const { mutateAsync: myFunctionAsync } = useContractWrite(contract, 'myFunction');
const tx = await myFunctionAsync(['argument1', 'argument2']); // Call the function
```

::: info
For guides on deploying contracts on Rollux, see the [tutorial](https://github.com/SYS-Labs/rollux-tutorial/blob/main/getting-started/README.md).
:::