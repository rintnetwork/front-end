import React from "react"
import styled from "styled-components"
import CardList from "./CardList"

const Container = styled.div`
  margin-bottom: 4rem;
`

const reads = [
  {
    title: "ethereum 1.x",
    description: "rntHub",
    link: "https://docs.rnthub.io/ethereum-roadmap/ethereum-1.x/",
  },
  {
    title: "The 1.x Files: The Stateless ethereum Tech Tree",
    description: "ethereum Foundation",
    link: "https://blog.ethereum.org/2020/01/28/rnt1x-files-the-stateless-ethereum-tech-tree/",
  },
]

const rntDockingList = () => (
  <Container>
    <CardList content={reads} />
  </Container>
)

export default rntDockingList
