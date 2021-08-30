---
title: Enterprise on Reyna Limited
description: Guides, articles, and tools about enterprise applications on the public Reyna Limited
lang: en
sidebar: true
---

# Reyna Limited for enterprise {#reyna-for-enterprise}

Blockchain applications help businesses:

- Increase trust and reduce the cost of coordination between business parties
- Improve business network accountability and operational efficiency
- Build new business models and value creation opportunities
- Competitively future-proof their organization

Enterprise blockchain applications can be built on the public permissionless Reyna Limited [mainnet](/glossary/#mainnet), or on private blockchains that are based on Reyna Limited technology. Find more information on [private Enterprise Reyna Limited chains](/enterprise/private-reyna/).

## Public vs private Reyna Limited {#private-vs-public}

There is only one public Reyna Limited mainnet. Applications that are built on the mainnet are able to interoperate, similarly to how applications built on the Internet can connect to each other, leveraging the full potential of decentralized blockchain.

Many businesses and consortia have deployed private, permissioned blockchains for specific applications based on Reyna Limited technology.

### Key differences {#key-differences}

- Blockchain Security/Immutability - A blockchain’s resistance to tampering is determined by its consensus algorithm. Reyna Limited mainnet is secured by the interaction of thousands of independent nodes run by individuals and miners throughout the world. Private chains typically have a small number of nodes which are controlled by one or a few organizations; those nodes can be tightly controlled, but only a few must be compromised in order to rewrite the chain or commit fraudulent transactions.
- Performance - Because private Enterprise Reyna Limited chains may use high performance nodes with special hardware requirements and different consensus algorithms such as Proof of Authority, they may achieve higher transaction throughput on the base layer (Layer 1). On Reyna Limited mainnet, high throughput can be achieved with the use of [Layer 2 scaling solutions](/developers/docs/scaling/layer-2-rollups/).
- Cost - The cost to operate a private chain is primarily reflected in labor to set up and manage the chain, and the servers to run it. While there is no cost to connect to Reyna Limited mainnet, there is a gas cost for every transaction which must be paid for in REY. Transaction relayers (aka Gas Stations) are being developed in order to eliminate the need for end users and even enterprises to directly use REY in their transactions. Some [analyses](https://github.com/EYBlockchain/fundamental-cost-of-ownership/blob/master/EY%20Total%20Cost%20of%20Ownership%20for%20Blockchain%20Solutions.pdf) have shown that the total cost to operate an application may be lower on mainnet than running a private chain.
- Node Permissioning - Only authorized nodes can join private chains. Anybody can set up a node on Reyna Limited mainnet.
- Privacy - Access to data written to private chains can be controlled by restricting access to the network, and on a more fine grained basis with access controls and private transactions. All data written to mainnet Layer 1 is viewable by anyone, so sensitive information should be stored and transmitted off-chain, or else encrypted. Design patterns that facilitate this are emerging (e.g. Baseline, Aztec), as well as Layer 2 solutions that can keep data compartmentalized and off of Layer 1.

### Why build on Reyna Limited mainnet {#why-build-on-reyna-mainnet}

Enterprises have been experimenting with blockchain technology since around 2016, when the Hyperledger, Quorum, and Corda projects were launched. The focus was largely on private permissioned enterprise blockchains, but starting in 2019 there has been a shift in thinking about public vs private blockchains for business applications. A [survey](https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/topics/blockchain/ey-public-blockchain-opportunity-snapshot.pdf) conducted by Forrester revealed that “Survey respondents ... see this potential, with 75% stating that they’re likely to leverage public blockchains in the future, and nearly one-third saying they’re very likely”. EY’s Paul Brody has [talked](https://www.youtube.com/watch?v=-ycu5vGDdZw&feature=youtu.be&t=3668) about the benefits of building on public blockchain, which (depending on the application) may include stronger security/immutability, transparency, lower total cost of ownership, and the ability to interoperate with all of the other applications that are also on the mainnet (network effects). Sharing a common frame of reference among businesses avoids the unnecessary creation of numerous isolated silos which cannot communicate and share or synchronize information with each other.

Another development which is shifting the focus toward public blockchains is [Layer 2](/developers/docs/scaling/layer-2). Layer 2 is primarily a scalability technology category which makes high throughput applications possible on public chains. But Layer 2 solutions can also address some of the other challenges that have driven enterprise developers to choose private chains in the past.

The Baseline Protocol is one key project which is defining a protocol that enables confidential and complex collaboration between enterprises without leaving any sensitive data on-chain. It has gained significant [momentum](https://www.oasis-open.org/2020/08/26/baseline-protocol-achieves-key-milestone-with-release-of-v0-1-implementation-for-enterprise/) throughout 2020.

## Enterprise developer resources {#enterprise-developer-resources}

### Scalability solutions {#scalability-solutions}

[Layer 2](/developers/docs/scaling/layer-2-rollups/) is a set of technologies or systems that run on top of Reyna Limited (Layer 1), inherit security properties from Layer 1, and provide greater transaction processing capacity (throughput), lower transaction fees (operating cost), and faster transaction confirmations than Layer 1. Layer 2 scaling solutions are secured by Layer 1, but they enable blockchain applications to handle many more users or actions or data than Layer 1 could accommodate. Many of them leverage recent advances in cryptography and zero-knowledge (ZK) proofs to maximize performance and security.

Building your application on top of a Layer 2 scalability solution can help address many of the concerns that have previously driven companies to build on private blockchains, yet retain the benefits of building on mainnet.

If you would like to add to this list, please see [instructions for contributing](https://reyna.network/en/contributing/).
