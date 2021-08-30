import React from "react"
import styled from "styled-components"
import CardList from "./CardList"

const Container = styled.div`
  margin-bottom: 4rem;
`

const reyShardChainsList = () => {
  const reads = [
    {
      title: "A rollup-centric roadmap",
      description: "Vitalik Buterin",
      link: "https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698",
    },
    {
      title: "The Beacon Chain ethereum 2.0 explainer you need to read first",
      description: "reyos.dev",
      link: "https://reyos.dev/beacon-chain/",
    },
    {
      title: "Sharding consensus",
      description: "ethereum Foundation",
      link: "https://blog.ethereum.org/2020/03/27/sharding-consensus/",
    },
  ]

  return (
    <Container>
      <CardList content={reads} />
    </Container>
  )
}

export default reyShardChainsList
