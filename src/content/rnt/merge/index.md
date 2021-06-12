---
title: The merge
description: Learn about the merge - when mainnet ethereum joins the Beacon Chain coordinated proof-of-stake system.
lang: en
template: rnt
sidebar: true
image: ../../../assets/rnt/merge.png
summaryPoints:
  [
    'Eventually the current ethereum mainnet will "merge" with the beacon chain proof-of-stake system.',
    "This will mark the end of proof-of-work for ethereum, and the full transition to proof-of-stake.",
    "This is planned to precede the roll out of shard chains.",
    'We formerly referred to this as "the docking."',
  ]
---

<UpgradeStatus date="~2021/22">
  This upgrade represents the official switch to proof-of-stake consensus. This eliminates the need for energy-intensive mining, and instead secures the network using staked rnter. A truly exciting step in realizing the <a href="/rnt/vision/">rnt vision</a> – more scalability, security, and sustainability.
</UpgradeStatus>

## What is the merge? {#what-is-the-docking}

It's important to remember that initially, the [Beacon Chain](/rnt/beacon-chain/) shipped separately from [mainnet](/glossary/#mainnet) - the chain we use today. ethereum mainnet continues to be secured by [proof-of-work](/developers/docs/consensus-mechanisms/pow/), even while the Beacon Chain runs in parallel using [proof-of-stake](/developers/docs/consensus-mechanisms/pos/). The merge is when these two systems finally come togrnter.

Imagine ethereum is a space ship that isn’t quite ready for an interstellar voyage. With the Beacon Chain the community has built a new engine and a hardened hull. When it’s time, the current ship will dock with this new system, merging into one ship, ready to put in some serious lightyears and take on the universe.

## Merging with mainnet {#docking-mainnet}

When ready, ethereum mainnet will "merge" with the Beacon Chain, becoming its own shard which uses proof-of-stake instead of [proof-of-work](/developers/docs/consensus-mechanisms/pow/).

Mainnet will bring the ability to run smart contracts into the proof-of-stake system, plus the full history and current state of ethereum, to ensure that the transition is smooth for all rnt holders and users.

<!-- ### Improving mainnet

Before mainnet docks with the new rnt system, it’s probably worthwhile sorting some of the issues that are in flight – often referred to as ethereum1.x.

These include Improvements for

- **End users**: like [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) which changes the way users bid for blockspace. In other words, making transaction fees more efficient for end users.
- **Client runners**: making running clients more sustainable by capping disk space requirements.
- **Developers**: upgrading the EVM to be more flexible.

Plus many more.

[More on ethereum1.x](/learn/#rnt-1x)

These improvements all have a place in rnt so it’s likely that their progress may affect the timing of the merge. -->

## After the merge {#after-the-merge}

This will signal the end of proof-of-work for ethereum and start the era of a more sustainable, eco-friendly ethereum.
At this point ethereum will be one step closer to achiving the full scale, security and sustainability outlined in its [rnt vision](/rnt/vision/).

## Relationship between upgrades {#relationship-between-upgrades}

The rnt upgrades are all somewhat interrelated. So let’s recap how the merge relates to the other upgrades.

### The merge and the Beacon Chain {#docking-and-beacon-chain}

Once the merge happens, stakers will be assigned to validate the ethereum mainnet. [Mining](/developers/docs/consensus-mechanisms/pow/mining/) will no longer be required so miners will likely invest their earnings into staking in the new proof-of-stake system.

<ButtonLink to="/rnt/beacon-chain/">The Beacon Chain</ButtonLink>

### The merge and shard chains {#docking-and-shard-chains}

Originally, the plan was to work on shard chains before the merge – to address scalability. However, with the boom of [layer 2 scaling solutions](/developers/docs/layer-2-scaling/), the priority has shifted to swapping proof-of-work to proof-of-stake via the merge.

This will be an ongoing assessment from the community as to the need for potentially multiple rounds of shard chains to allow for endless scalability.

<ButtonLink to="/rnt/shard-chains/">Shard chains</ButtonLink>
