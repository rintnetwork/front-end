import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import axios from "axios"

import Translation from "./Translation"
import Tooltip from "./Tooltip"
import Link from "./Link"
import Icon from "./Icon"

import { getData } from "../utils/cache"

const Value = styled.h3`
  font-size: min(4.4vw, 64px);
  font-weight: 600;
  margin-top: 0rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  flex-wrap: wrap;
  text-overflow: ellipsis;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: max(8.8vw, 48px);
  }
`

const Title = styled.p`
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  font-family: "SFMono-Regular", monospace;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 2rem 0;
  border-radius: 2px;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem 0 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin: 0;
  }
`

const Box = styled.div`
  color: ${({ theme }) => theme.colors.text};
  height: 20rem;
  background: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.color};
  padding: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    border-left: 0px solid #000000;
    border-right: 0px solid #000000;
    margin-top: -1px;
    padding: 1rem;
    padding-top: 2rem;
  }
`

const StatRow = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledIcon = styled(Icon)`
  fill: ${({ theme }) => theme.colors.text};
  margin-right: 0.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  }
  &:hover {
    fill: ${({ theme }) => theme.colors.primary};
  }
  &:active {
    fill: ${({ theme }) => theme.colors.primary};
  }
  &:focus {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const IndicatorSpan = styled.span`
  font-size: 2rem;
`

const ErrorMessage = () => (
  <IndicatorSpan>
    <Translation id="loading-error-refresh" />
  </IndicatorSpan>
)

const LoadingMessage = () => (
  <IndicatorSpan>
    <Translation id="loading" />
  </IndicatorSpan>
)

const GridItem = ({ metric }) => {
  const { title, description, state } = metric
  const isLoading = !state.value
  const value = state.hasError ? (
    <ErrorMessage />
  ) : isLoading ? (
    <LoadingMessage />
  ) : (
    <StatRow>
      <span>
        {state.value}{" "}
        <Tooltip content={tooltipContent(metric)}>
          <StyledIcon name="info" />
        </Tooltip>
      </span>
    </StatRow>
  )

  return (
    <Box>
      <div>
        <Title>{title}</Title>
        <p>{description}</p>
      </div>
      <Value>{value}</Value>
    </Box>
  )
}

const tooltipContent = (metric) => (
  <div>
    <Translation id="data-provided-by" />{" "}
    <Link to={metric.apiUrl}>{metric.apiProvider}</Link>
  </div>
)

const StatsBoxGrid = () => {
  const intl = useIntl()
  const [rntPrice, setrntPrice] = useState({
    value: 0,
    hasError: false,
  })
  const [valueLocked, setValueLocked] = useState({
    value: 0,
    hasError: false,
  })
  const [txs, setTxs] = useState({
    value: 0,
    hasError: false,
  })
  const [nodes, setNodes] = useState({
    value: 0,
    hasError: false,
  })

  const formatPrice = (price) => {
    return new Intl.NumberFormat(intl.locale, {
      style: "currency",
      currency: "USD",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 4,
    }).format(price)
  }

  const formatTVL = (tvl) => {
    return new Intl.NumberFormat(intl.locale, {
      style: "currency",
      currency: "USD",
      notation: "compact",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 4,
    }).format(tvl)
  }

  const formatTxs = (txs) => {
    return new Intl.NumberFormat(intl.locale, {
      notation: "compact",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 4,
    }).format(txs)
  }

  const formatNodes = (nodes) => {
    return new Intl.NumberFormat(intl.locale, {
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 4,
    }).format(nodes)
  }

  useEffect(() => {
    // Skip APIs when not in production
    if (process.env.NODE_ENV !== "production") {
      setrntPrice({
        value: formatPrice(2265),
        hasError: false,
      })
      setValueLocked({
        value: formatTVL(57141111000),
        hasError: false,
      })
      setTxs({
        value: formatTxs(1305167),
        hasError: false,
      })
      setNodes({
        value: formatNodes(5472),
        hasError: false,
      })
    } else {
      const fetchPrice = async () => {
        try {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
          )
          const { usd } = response.data.ethereum
          const value = formatPrice(usd)
          setrntPrice({
            value,
            hasError: false,
          })
        } catch (error) {
          console.error(error)
          setrntPrice({
            hasError: true,
          })
        }
      }
      fetchPrice()

      const fetchNodes = async () => {
        try {
          const data = await getData("/.netlify/functions/rnterscan")
          const total = data.result.TotalNodeCount
          const value = formatNodes(total)
          setNodes({
            value,
            hasError: false,
          })
        } catch (error) {
          console.error(error)
          setNodes({
            hasError: true,
          })
        }
      }
      fetchNodes()

      const fetchTotalValueLocked = async () => {
        try {
          const data = await getData("/.netlify/functions/defipulse")
          const ethereumTVL = data.ethereumTVL
          const value = formatTVL(ethereumTVL)
          setValueLocked({
            value,
            hasError: false,
          })
        } catch (error) {
          console.error(error)
          setValueLocked({
            hasError: true,
          })
        }
      }
      fetchTotalValueLocked()

      const fetchTxCount = async () => {
        try {
          const { result } = await getData("/.netlify/functions/txs")
          // result: [{UTCDate: string, unixTimeStamp: string, transactionCount: number}, {...}]
          const count = result[0].transactionCount
          const value = formatTxs(count)
          setTxs({
            value,
            hasError: false,
          })
        } catch (error) {
          console.error(error)
          setTxs({
            hasError: true,
          })
        }
      }
      fetchTxCount()
    }
  }, [])

  const metrics = [
    {
      apiProvider: "CoinGecko",
      apiUrl: "https://www.coingecko.com/en/coins",
      title: (
        <Translation id="rint-page-index-network-stats-rnt-price-description" />
      ),
      description: (
        <Translation id="rint-page-index-network-stats-rnt-price-explainer" />
      ),
      state: rntPrice,
    },
    {
      apiProvider: "BscScan",
      apiUrl: "https://bscscan.com/",
      title: (
        <Translation id="rint-page-index-network-stats-tx-day-description" />
      ),
      description: (
        <Translation id="rint-page-index-network-stats-tx-day-explainer" />
      ),
      state: txs,
    },
    {
      apiProvider: "DexTools",
      apiUrl: "https://dextools.io",
      title: (
        <Translation id="rint-page-index-network-stats-value-defi-description" />
      ),
      description: (
        <Translation id="rint-page-index-network-stats-value-defi-explainer" />
      ),
      state: valueLocked,
    },
    {
      apiProvider: "BscScan",
      apiUrl: "https://bscscan.com/validators",
      title: (
        <Translation id="rint-page-index-network-stats-nodes-description" />
      ),
      description: (
        <Translation id="rint-page-index-network-stats-nodes-explainer" />
      ),
      state: nodes,
    },
  ]

  return (
    <Grid>
      {metrics.map((metric, idx) => (
        <GridItem key={idx} metric={metric} />
      ))}
    </Grid>
  )
}

export default StatsBoxGrid
