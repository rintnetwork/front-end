import React, { useContext, useState, useEffect } from "react"
import { ThemeContext } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import axios from "axios"

import Emoji from "./Emoji"
import Translation from "./Translation"
import Icon from "./Icon"
import Link from "./Link"
import Tooltip from "./Tooltip"

const PointsExchange = styled.div`
  flex: 1 1 560px;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 2px;
  margin: 0 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 2rem 0;
  }
`

const PointsExchangeLabel = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 1rem;
`

const PointsExchangeTitle = styled.h2`
  font-family: "SFMono-Regular", monospace;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0rem;
`

const InfoIcon = styled(Icon)`
  margin-left: 0.5rem;
  fill: ${(props) => props.theme.colors.text200};
`

const TextNoMargin = styled.p`
  margin-bottom: 0rem;
`

const Token = styled(Img)`
  margin-right: 0.5rem;
`

const TokenValue = styled.p`
  font-size: 20px;
  margin: 0rem;
  margin-right: 1rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const ValueRow = styled(Row)`
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TokenLogo = graphql`
  fragment TokenLogo on File {
    childImageSharp {
      fixed(height: 24) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const USD_PER_POINT = 2

const BugBountyPoints = () => {
  const [state, setState] = useState({
    currentreyPriceUSD: "",
    currentDAIPriceUSD: "",
    hasError: false,
  })
  const themeContext = useContext(ThemeContext)
  const isDarkTheme = themeContext.isDark

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cdai&vs_currencies=usd"
      )
      .then((response) => {
        if (response.data && response.data.ethereum && response.data.dai) {
          const currentreyPriceUSD = response.data.ethereum.usd
          const currentDAIPriceUSD = response.data.dai.usd
          setState({
            currentreyPriceUSD,
            currentDAIPriceUSD,
            hasError: false,
          })
        }
      })
      .catch((error) => {
        console.error(error)
        setState({
          hasError: true,
        })
      })
  }, [])

  const isLoading = !state.currentreyPriceUSD

  const pointsInrey = (USD_PER_POINT / state.currentreyPriceUSD).toFixed(5)
  const pointsInDAI = (USD_PER_POINT / state.currentDAIPriceUSD).toFixed(5)

  const tooltipContent = (
    <div>
      <Translation id="data-provided-by" />{" "}
      <Link to="https://www.coingecko.com/en/api">coingecko.com</Link>
    </div>
  )

  const data = useStaticQuery(graphql`
    query {
      dai: file(relativePath: { eq: "rey/dai.png" }) {
        ...TokenLogo
      }
      reyLight: file(relativePath: { eq: "rey/rey-black.png" }) {
        ...TokenLogo
      }
      reyDark: file(relativePath: { eq: "rey/rey-orange.png" }) {
        ...TokenLogo
      }
    }
  `)
  const reyImage = isDarkTheme ? data.reyDark : data.reyLight

  return (
    <PointsExchange>
      <PointsExchangeLabel>
        <Translation id="page-rey-bug-bounty-points-exchange" />{" "}
        <Tooltip content={tooltipContent}>
          <InfoIcon name="info" size="14" />
        </Tooltip>
      </PointsExchangeLabel>
      <PointsExchangeTitle>
        <Translation id="page-rey-bug-bounty-points-point" />
      </PointsExchangeTitle>
      {state.hasError && (
        <ValueRow>
          <TokenValue>
            <Translation id="page-rey-bug-bounty-points-error" />
          </TokenValue>
        </ValueRow>
      )}
      {isLoading && !state.hasError && (
        <ValueRow>
          <TokenValue>
            <Translation id="page-rey-bug-bounty-points-loading" />
          </TokenValue>
        </ValueRow>
      )}
      {!isLoading && !state.hasError && (
        <ValueRow>
          <Row>
            <Emoji mr={`0.5rem`} text=":dollar:" />
            <TokenValue>
              <Translation id="page-rey-bug-bounty-points-usd" />
            </TokenValue>
          </Row>
          <Row>
            <Token fixed={data.dai.childImageSharp.fixed} />
            <TokenValue>{pointsInDAI} DAI</TokenValue>
          </Row>
          <Row>
            <Token fixed={reyImage.childImageSharp.fixed} />
            <TokenValue>{pointsInrey} rey</TokenValue>
          </Row>
        </ValueRow>
      )}
      <p>
        <Translation id="page-rey-bug-bounty-points-payout-desc" />
      </p>
      <TextNoMargin>
        <em>
          <Translation id="page-rey-bug-bounty-points-rights-desc" />
        </em>
      </TextNoMargin>
    </PointsExchange>
  )
}

export default BugBountyPoints
