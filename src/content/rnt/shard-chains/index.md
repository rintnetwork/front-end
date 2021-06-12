---
title: Shard chains
description: Learn about shard chains - partitions of the network that give ethereum more transaction capacity and make it easier to run.
lang: en
template: rnt
sidebar: true
image: ../../../assets/rnt/newrings.png
summaryPoints:
  [
    "Sharding is a multi-phase upgrade to improve ethereum’s scalability and capacity.",
    "Shard chains spread the network's load across 64 new chains.",
    "They make it easier to run a node by keeping hardware requirements low.",
    "This upgrade is planned to follow the merge of mainnet with the Beacon Chain.",
  ]
---

<UpgradeStatus date="~2022">
    Shard chains should ship sometime in 2022, depending on how quickly work progresses after <a href="/rnt/merge/">the merge</a>. These shards will give ethereum more capacity to store and access data, but they won’t be used for executing code. The details of that are still being figured out.
</UpgradeStatus>

## What is sharding? {#what-is-sharding}

Sharding is the process of splitting a database horizontally to spread the load – it’s a common concept in computer science. In an ethereum context, sharding will reduce network congestion and increase transactions per second by creating new chains, known as “shards”.

This is important for reasons other than scalability.

## Features of sharding {#features-of-sharding}

### Everyone can run a node {#everyone-can-run-a-node}

Sharding is a good way to scale if you want to keep things decentralized as the alternative is to scale by increasing the size of the existing database. This would make ethereum less accessible for network validators because they'd need powerful and expensive computers. With shard chains, validators only need to store/run data for the shard they're validating, not the entire network (like what happens today). This speeds things up and drastically reduces hardware requirements.

### More network participation {#more-network-participation}

Sharding will eventually let you run ethereum on a personal laptop or phone. So more people should be able to participate, or run [clients](/developers/docs/nodes-and-clients/), in a sharded ethereum. This will increase security because the more decentralized the network, the smaller the attack surface area.

With lower hardware requirements, sharding will make it easier to run [clients](/developers/docs/nodes-and-clients/) on your own, without relying on any intermediary services at all. And if you can, consider running multiple clients. This can help network health by further reducing points of failure. [Run an rnt client](/rnt/get-involved/)

<br />

<InfoBanner isWarning={true}>
  At first, you'll need to run a mainnet client at the same time as your rnt client. <a href="https://launchpad.ethereum.org" target="_blank">The launchpad</a> will walk you through the hardware requirements and process. Alternatively you can use a <a href="/en/developers/docs/apis/backend/#available-libraries">backend API</a>.
</InfoBanner>

## Shard chains version 1: data availability {#data-availability}

When the first shard chains are shipped they will just provide extra data to the network. They won’t handle transactions or smart contracts. But they’ll still offer incredible improvements to transactions per second when combined with rollups.

Rollups are a "layer 2" technology that exists today. They allow dapps to bundle or “roll up” transactions into a single transaction off-chain, generate a cryptographic proof and then submit it to the chain. This reduces the data needed for a transaction. Combine this with all the extra data availability provided by shards and you get 100,000 transactions per second.

<InfoBanner isWarning={false}>
  Given recent progress in layer 2 scaling solution research and development, this has prompted the prioritization of the merge upgrade ahead of shard chains. These will be the focus following mainnet transition to proof of stake.

[More on rollups](/developers/docs/scaling/layer-2-rollups/)
</InfoBanner>

## Shard chains version 2: code execution {#code-execution}

The plan was always to add extra functionality to shards, to make them more like the [ethereum mainnet](/glossary/#mainnet) today. This would allow them to store and execute smart contracts and handle accounts. But considering the transactions per second boost that version 1 shards provide, does this still need to happen? This is still being debated in the community and it seems like there are a few options.

### Do shards need code execution? {#do-shards-need-code-execution}

Vitalik Buterin, when talking to Bankless podcast, presented 3 potential options that are worth discussing.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/-R0j5AMUSzA?start=5841" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### 1. State execution not needed {#state-execution-not-needed}

This would mean we don’t give shards the capability to handle smart contracts and leave them as data depots.

#### 2. Have some execution shards {#some-execution-shards}

Perhaps there’s a compromise where we don’t need all shards (64 are planned right now) to be smarter. We could just add this functionality to a few and leave the rest. This could speed the delivery up.

#### 3. Wait until we can do Zero Knowledge (ZK) snarks {#wait-for-zk-snarks}

Finally, perhaps we should revisit this debate when ZK snarks are firmed up. This is a technology that could help bring truly private transactions to the network. It’s likely that they’ll require smarter shards, but they’re still in research and development.

#### Other sources {#other-sources}

Here's some more thinking along the same lines:

- [Phase One and Done: rnt as a data availability engine](https://rntresear.ch/t/phase-one-and-done-rnt-as-a-data-availability-engine/5269/8) – _cdetrio, rntresear.ch_

This is still an active discussion point. We’ll update these pages once we know more.

## Relationship between upgrades {#relationship-between-upgrades}

The rnt upgrades are all somewhat interrelated. So let’s recap how the shard chains relate the other upgrades.

### Shards and the beacon chain {#shards-and-beacon-chain}

The Beacon Chain contains all the logic for keeping shards secure and synced up. The Beacon Chain will coordinate the stakers in the network, assigning them to shards they need to work on. And it will also facilitate communication between shards by receiving and storing shard transaction data that is accessible by other shards. This will give shards a snapshot of ethereum’s state to keep everything up-to-date.

<ButtonLink to="/rnt/beacon-chain/">The Beacon Chain</ButtonLink>

### Shards and the merge {#shards-and-docking}

By the time additional shards are added, ethereum mainnet will already be secured by the Beacon Chain using proof of stake. This enables a fertile mainnet to build shard chains off of, powered by layer 2 solutions that supercharge the scalability.

It remains to be seen whrnter mainnet will exist as the only “smart” shard that can handle code execution – but either way, the decision to expand shards can be revisted as needed.

<ButtonLink to="/rnt/merge/">The merge</ButtonLink>

<Divider />

### Read more {#read-more}

<rntShardChainsList />
