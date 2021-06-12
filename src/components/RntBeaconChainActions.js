import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import { translateMessageId } from "../utils/translations"

import CardList from "./CardList"
import Card from "./Card"
import ButtonLink from "./ButtonLink"
import Translation from "../components/Translation"

const Container = styled.div`
  margin-bottom: 4rem;
`

const StyledCardContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const StyledCardLeft = styled(Card)`
  margin-left: 0rem;
  margin-right: 1rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-right: 0rem;
    margin-bottom: 2rem;
  }
`

const StyledCardRight = styled(Card)`
  margin-left: 0rem;
  margin-left: 1rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 0rem;
  }
`

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2rem;
  a {
    display: none;
  }
`

const StyledButtonLink = styled(ButtonLink)`
  margin-bottom: 0.75rem;
`

export const DataLogo = graphql`
  fragment DataLogo on File {
    childImageSharp {
      fixed(width: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const RntBeaconChainActions = () => {
  const intl = useIntl()

  const reads = [
    {
      title: "Two Point Oh: The Beacon Chain",
      description: "Status",
      link: "https://our.status.im/two-point-oh-the-beacon-chain/",
    },
    {
      title: "The Beacon Chain ethereum 2.0 explainer you need to read first",
      description: "rntos.dev",
      link: "https://rntos.dev/beacon-chain/",
    },
    {
      title: "Sharding consensus",
      description: "ethereum Foundation",
      link: "https://blog.ethereum.org/2020/03/27/sharding-consensus/",
    },
  ]

  return (
    <Container>
      <StyledCardContainer>
        <StyledCardLeft
          emoji=":money_with_wings:"
          title={translateMessageId("rnt-become-staker", intl)}
          description={translateMessageId("rnt-become-staker-desc", intl)}
        >
          <StyledButtonLink to="https://launchpad.ethereum.org">
            <Translation id="get-started" />
          </StyledButtonLink>
          <ButtonLink isSecondary to="/rnt/staking/">
            <Translation id="page-rnt-index-staking-learn" />
          </ButtonLink>
        </StyledCardLeft>
        <StyledCardRight
          emoji=":computer:"
          title={translateMessageId("rnt-run-beacon-chain", intl)}
          description={translateMessageId("rnt-run-beacon-chain-desc", intl)}
        >
          <ButtonLink isSecondary to="/rnt/get-involved/">
            <Translation id="rnt-run-beacon-chain" />
          </ButtonLink>
        </StyledCardRight>
      </StyledCardContainer>
      <H3>
        <Translation id="rnt-explore" />
      </H3>
      <H3>
        <Translation id="read-more" />
      </H3>
      <CardList content={reads} />
    </Container>
  )
}

export default RntBeaconChainActions
