---
title: Introduction to Syscoin
lang: en-US
---

Rollux is fast, crazy inexpensive, and attracts a lot of attention! Once you see *why* Rollux is built on Syscoin, we think you will be just as excited about SYS. After all, the great things Rollux provides would not be achievable without the L1 that supports it from beneath.  

## Syscoin in a Nutshell

For the simplest and highest-level overview of Syscoin, check out [Syscoin in a Nutshell](https://docs.syscoin.org/docs/intro/nutshell) in the Syscoin Docs.

## Overview

Syscoin is designed as the ideal L1 and data availability layer for modular scaling technologies like rollups. It provides a coordinated dual-chain stack;

1. Syscoin native (UTXO, Bitcoin-based)
2. Syscoin NEVM (Network-Enhanced Virtual Machine) which provides an EVM

**Syscoin makes rollups more secure with its Bitcoin auxPoW settlement, multi-quorum finality, and efficient data availability in the form of [BitcoinDA Protocol](PoDA.md).** BitcoinDA is based upon Syscoin's PoDA which was released March 2023 making it the very first enshrined L1 data availability solution ever built and deployed to a main network. Furthermore, Syscoin provides finality in the form of a multi-quorum BLS signature scheme as an enhancement on top of Nakamoto consensus which adds resistance selfish mining, and keeps the chain resilient in the face of non-final scenarios by enabling the protocol to resolve down to pure Nakamoto consensus instead of forking/stopping in those situations, unlike Ethereum's Casper.

**BitcoinDA and multi-quorum finality are unique innovations of Syscoin.**

<div align="center">
<img width="800" src="../../assets/docs/sys/diagram_SyscoinOverallDesign_rev2.png">
</div>

## Super bullish on modularity

Syscoin NEVM was launched to mainnet with only an 8M gas limit on L1 blocks — less than half of Ethereum’s current gas limit. What's even wilder is NEVM's block target is 15 times longer than Ethereum's, at 2.5 minutes (of course dynamically adjustable by miners in majority). With this, Syscoin flexes that it can provide real scalability without requiring huge blocks on L1. It will remain nimble, efficient, and easy for regular off-the-shelf computers to sync with, even while supporting a great deal of demand. Talk about fostering decentralization. **How's that for making a statement?**  This also solves the contentious problem of proper incentives for proper usage. End-users will almost always opt to use Rollux instead of using the L1 directly, which means more real-estate for scaling layers to settle on Syscoin's L1.


## How does Syscoin help rollups work optimally?

Rollups are the first modular technology to viably help scale EVM computation to massive user demand. Rollups are also key to achieving a near-optimal scenario in the blockchain trilemma. Syscoin asserts this can only be achieved by supporting rollups with a holistically modular Layer 1 that offers proven security, data availability, and decentralization.

Syscoin is designed holistically with this in mind. All near-instant activity on Rollux inherits the full security of Syscoin’s L1 in the background, including finality.

Here are some ways Syscoin shines for rollups.

### Bitcoin Merge-Mined PoW
Syscoin is [merge-mined](https://docs.syscoin.org/docs/tech/merged-mining) by Bitcoin's own network of miners and inherits a significant portion of Bitcoin's hashrate (recently 50-60%).  

Benefits of Bitcoin Merged Mining
- No additional energy expense to miners (re-applies work already performed)
- Less subject to miners dropping off due to asset devaluation than direct mining, due to low cost/overhead
- SYS further incentivizes Bitcoin miners to continue supporting Bitcoin
- High degree of flexibility in block subsidies and allocations which can translate to special incentives and very low network fees on the child stack 
- Taps into the antifragility of Bitcoin's network

Syscoin asserts that Layer 1 security is fulfilled better by PoW than PoS for multiple reasons.  

Benefits of Proof-of-Work
- Resilient to quantum stealth attacks
- Consensus resilient to more black swan risks (fiat hyper-inflation, internet censorship)
- Decentralized finality achievable without fault concerns
- Better survivability against irrationality

However, Syscoin does not mirror Bitcoin's economics and consensus rules. Syscoin's economy is utility-focused and based upon [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559). It sources Bitcoin’s network for the hardness it provides and passes that on to rollups. 

### [Finality](Finality.md) that is Decentralized and Fault Tolerant
Syscoin’s finality is sourced from a multi-quorum consisting of 4 groups of 400 Sentry nodes (1,600) which are randomly selected among the entirety of the network (currently ~2,700 Sentries). Each quorum is reformed every few hours. 3 out of 4 quorums must agree on a block in order to establish a chainlock.

This mechanism provides a high probability of finality. In the rare event that finality cannot be achieved on a block, the network falls back to the longest chain rule of Nakamoto consensus - a seamless and non-breaking event.

|             |Time to finality after block|Blocktime   |Resilience absent finality        |Mechanism     |
| :-----------|----------------------------|------------|----------------------------------|--------------|
|**Syscoin**  |~12.5 minutes               |2.5 minutes |Nakamoto longest chain rule       |PoW + Quorums |
|**Ethereum** |~14 minutes (~3 epochs)     |10 seconds  |None. No finality = breaking event|PoS + Casper  |


Every five blocks (total of 12.5 minutes based on average blocktime), a chainlock checkpoints the chain.

Syscoin’s finality provides effective resistance to 51%, malicious long-range MEV, and selfish mining attacks, while retaining PoW as the underlying consensus mechanism. Attackers must accomplish two expensive and challenging tasks to achieve a successful 51% attack: 1) Control greater than 50% of Bitcoin's hash power supplied to Syscoin, plus 2) Control a super-majority of Syscoin Sentry nodes.

### Efficient Data Availability on Layer 1 with [BitcoinDA](PoDA.md)
Data availability is required to exist within the security domain of Layer 1 in order for rollups to properly serve critical financial applications by securing users’ ability to exit to L1. Syscoin’s L1 DA solution is called BitcoinDA (Proof of Data Availability). Syscoin’s BitcoinDA differs from Ethereum’s danksharding in how data is stored, presented, pruned, and how fees are calculated. BitcoinDA has characteristics that make it a valuable alternative to Ethereum’s work-in-progress data availability solution, Proto-Danksharding.

BitcoinDA’s advantages can be summarized as:

- Cheaper transactions
- No data sharding required
- Greater data throughput with efficient Keccak data blobs
- Secured by Bitcoin’s own PoW plus Syscoin's finality
- More resilient to network-based outages/censorship
- Simpler data fee market based on Syscoin’s UTXO fee market
- Nakamoto Assumption: Only one honest node is needed to guarantee data

BitcoinDA’s design considers proving and archiving as separate concerns. With BitcoinDA, the succinct proof of data is stored on Layer 1, while an assumption is made that at least one honest party in the world will archive the raw data within a 6-hour window of time - similar to the honesty assumption made when syncing a Bitcoin node (at least one honest node). If desired, the raw data itself can be secured by Syscoin’s L1 network by reposting the data every 6 hours.

Rollux EigenDA and Validiums (fully offchain DA) can serve as an alternative to BitcoinDA for even lower cost and higher throughput. However, in the case of Syscoin's BitcoinDA, Layer 1 data security is quite affordable and BitcoinDA archive nodes store raw data offchain while you still gain the security of onchain state and verification of data integrity.


### [Inherited L1 Security with L2 Variable Gas Rate Dominance](Gas.md)

-----


Find out more about how Syscoin provides **[the most ideal L1 settlement for L2 solutions](https://jsidhu.medium.com/why-syscoin-is-the-ideal-layer-1-3ff690a7ef5f)**.


## FAQ

**Q. "How do I connect to Rollux?" or "How do I start using Rollux?"**  
A. Refer to our guide for **[getting started](../help/start-using-rollux-mainnet/)**.

**Q."Does Syscoin Rollux require a separate gas token?"**   
A. No. It uses the native coin of Syscoin for gas - SYS, or TSYS in the case of testnet.

**Q."How can I get some SYS?"**  
A. There are a few ways:  
1.  Use a centralized exchange. Go here for [further instructions](../help/start-using-rollux-mainnet/#step-3-fund-your-wallet-with-sys).
2.  To get a small amount of SYS to cover a gas fee, you can use a [Rollux SYS faucet](../useful-tools/faucets/). This is helpful if you wish to get SYS from the Pegasys DEX, as some SYS is required to cover the tiny network fee for swapping.
3.  Use the [Pegasys](https://app.pegasys.fi) on Rollux.  
  
**Q."How do I move SYS or TSYS between Syscoin and Rollux?"**   
A. Use [Rollux Portal](https://bridge.rollux.com), the canonical bridge of Rollux. [Refer to instructions](../help/using-rollux-portal/).


**Q.“What is the blocktime of the Rollux optimistic rollup?”**  
A. 2 seconds


**Q. “At what frequency does the L2 settle bundled transactions on L1? What is the threshold that triggers settlement?”**   
A. The timing of settlement depends on the volume of network activity.  
Either of the following conditions can trigger settlement to L1:  

   - The data footprint of the batch of transactions on L2 amounts to at least 2MB  
   - At least 24 new blocks have been created on the L1 since the last L2 settlement  
    
More activity on the rollup brings faster settlement, to a max rate of once every L1 block.


**Q. "How do I set up a Rollux P2P replica node?"**  
A. Refer to our replica node setup **[guide](../developers/build/run-a-node/)**. 


**Q. "What RPC/WSS Methods/Subscriptions are available?**  
A. Refer to our **[RPC documentation](../developers/build/json-rpc/)**.


**Q. Can you provide sample transactions of Rollux settling a batch on Syscoin NEVM and using BitcoinDA on Syscoin Native (UTXO), and further info?**  
A. Yes. Samples can be seen in Syscoin's **[BitcoinDA documentation](https://docs.syscoin.org/docs/tech/poda)**.


**Q. How can I interact with BitcoinDA Protocol?**  
A. Refer to Syscoin's **[BitcoinDA documentation](https://docs.syscoin.org/docs/tech/poda)**.


**Q. Are there any established processes for archiving Rollux raw data committed to BitcoinDA?**  
A. Refer to Syscoin's **[BitcoinDA documentation](https://docs.syscoin.org/docs/tech/poda)**.