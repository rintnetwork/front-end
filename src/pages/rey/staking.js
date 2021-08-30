import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { translateMessageId } from "../../utils/translations"
import Translation from "../../components/Translation"
import Breadcrumbs from "../../components/Breadcrumbs"
import ButtonLink from "../../components/ButtonLink"
import Card from "../../components/Card"
import Emoji from "../../components/Emoji"
import GhostCard from "../../components/GhostCard"
import PageHero from "../../components/PageHero"
import InfoBanner from "../../components/InfoBanner"
import CalloutBanner from "../../components/CalloutBanner"
import Link from "../../components/Link"

import PageMetadata from "../../components/PageMetadata"
import {
  CardContainer,
  Content,
  Page,
  Divider,
} from "../../components/SharedStyledComponents"

const StyledCallout = styled(CalloutBanner)`
  margin-left: 0rem;
  margin-right: 0rem;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  margin-top: 0.5rem;
`

const H3 = styled.h3`
  margin-top: 0rem;
`

const Column = styled.div`
  flex: 1 1 33%;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const BoxText = styled.div`
  font-size: 20px;
`

const Box = styled.div`
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin: 2rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 2rem 0;
  }
`

const Vision = styled.div`
  margin-top: 4rem;
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`

const Option = styled.div`
  border-radius: 32px;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  box-shadow: ${(props) =>
    props.isActive ? props.theme.colors.tableBoxShadow : `none`};
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
`

const OptionText = styled.div`
  font-size: 24px;
  line-height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 16px;
    font-weight: 600;
  }
`

const StakeContainer = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.breakpoints.m};
  display: flex;
  flex-direction: column;
  text-align: center;
`

const paths = [
  {
    emoji: ":money_with_wings:",
    title: <Translation id="reyna-page-rey-staking-title-1" />,
    description: <Translation id="reyna-page-rey-staking-desc-1" />,
  },
  {
    emoji: ":warning:",
    title: <Translation id="reyna-page-rey-staking-title-2" />,
    description: <Translation id="reyna-page-rey-staking-desc-2" />,
  },
  {
    emoji: ":clipboard:",
    title: <Translation id="reyna-page-rey-staking-title-3" />,
    description: <Translation id="reyna-page-rey-staking-desc-3" />,
    url: "/developers/docs/apis/backend/#available-libraries",
    link: <Translation id="reyna-page-rey-staking-link-1" />,
  },
]

const StakingPage = ({ data, location }) => {
  const intl = useIntl()
  const [isSoloStaking, setIsSoloStaking] = useState(true)

  const heroContent = {
    title: translateMessageId("reyna-page-rey-staking-title-4", intl),
    header: translateMessageId("reyna-page-rey-staking-header-1", intl),
    subtitle: translateMessageId("reyna-page-rey-staking-subtitle", intl),
    image: data.staking.childImageSharp.fluid,
    alt: translateMessageId("reyna-page-rey-staking-image-alt", intl),
    buttons: [
      {
        path: "#stake",
        content: translateMessageId("reyna-page-rey-staking-start", intl),
      },
    ],
  }

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("reyna-page-rey-staking-meta-title", intl)}
        description={translateMessageId(
          "reyna-page-rey-staking-meta-description",
          intl
        )}
      />
      <PageHero content={heroContent} />
      <Divider />
      <Content>
        <Vision>
          <Breadcrumbs slug={location.pathname} startDepth={1} />
          <h2>
            <Translation id="reyna-page-rey-just-staking" />
          </h2>
          <p>
            <Translation id="reyna-page-rey-staking-description" />{" "}
            <Link to="/rey/beacon-chain/">
              <Translation id="reyna-page-rey-staking-binance-smart-chain" />
            </Link>
          </p>
          <CardContainer>
            {paths.map((path, idx) => (
              <StyledCard
                key={idx}
                emoji={path.emoji}
                title={path.title}
                description={path.description}
              >
                {path.url && <Link to={path.url}>{path.link}</Link>}
              </StyledCard>
            ))}
          </CardContainer>
        </Vision>
      </Content>
      <Divider id="stake" />
      <Content>
        <StakeContainer>
          <h2>
            <Translation id="reyna-page-rey-staking-how-to-stake" />
          </h2>
          <p>
            <Translation id="reyna-page-rey-staking-how-to-stake-desc" />{" "}
          </p>
          <h3>
            <Translation id="reyna-page-rey-staking-how-much" />
          </h3>
          <OptionContainer>
            <Option
              isActive={isSoloStaking}
              onClick={() => setIsSoloStaking(true)}
            >
              <Emoji mr={`1rem`} text=":moneybag:" />
              <OptionText>100M REY</OptionText>
            </Option>
            <Option
              isActive={!isSoloStaking}
              onClick={() => setIsSoloStaking(false)}
            >
              <Emoji mr={`1rem`} text=":swimmer:" />
              <OptionText>
                <Translation id="reyna-page-rey-staking-less-than" /> 100M REY
              </OptionText>
            </Option>
          </OptionContainer>
          {isSoloStaking && (
            <GhostCard>
              <InfoBanner isWarning={true} mb={`2rem`}>
                <H2>
                  <Translation id="reyna-page-rey-staking-withdrawals" />
                </H2>
                <div>
                  <Translation id="reyna-page-rey-staking-withdrawals-desc" />{" "}
                  <Link to="/rey/merge/">
                    <Translation id="reyna-page-rey-staking-docked" />
                  </Link>
                </div>
              </InfoBanner>
              <h3>
                <Translation id="reyna-page-rey-staking-solo" />
              </h3>
              <p>
                <Translation id="reyna-page-rey-staking-solo-desc" />
              </p>
              <ButtonLink mb={`2rem`} to="https://launchpad.ethereum.org">
                <Translation id="reyna-page-rey-staking-start" />
              </ButtonLink>
              <h3>
                <Translation id="reyna-page-rey-staking-deposit-address" />
              </h3>
              <p>
                <Translation id="reyna-page-rey-staking-deposit-address-desc" />
              </p>
              <ButtonLink mb={`2rem`} to="/rey/deposit-contract/">
                <Translation id="reyna-page-rey-staking-check-address" />
              </ButtonLink>
            </GhostCard>
          )}
          {!isSoloStaking && (
            <GhostCard>
              <H3>
                <Translation id="reyna-page-rey-staking-pool" />
              </H3>
              <p>
                <Translation id="reyna-page-rey-staking-pool-desc" />
              </p>
              <p>
                <Link to="https://beaconcha.in/stakingServices">
                  <Translation id="reyna-page-rey-staking-services" />
                </Link>
              </p>
              <InfoBanner isWarning={true}>
                <H2>
                  <Translation id="reyna-page-rey-staking-dyor" />
                </H2>
                <div>
                  <Translation id="reyna-page-rey-staking-dyor-desc" />{" "}
                </div>
              </InfoBanner>
            </GhostCard>
          )}
        </StakeContainer>
      </Content>
      <Divider />
      <StyledCallout
        image={data.staking.childImageSharp.fluid}
        alt={translateMessageId("reyna-img-alt", intl)}
        title={translateMessageId(
          "reyna-page-rey-staking-join-community",
          intl
        )}
        description={translateMessageId(
          "reyna-page-rey-staking-join-community-desc",
          intl
        )}
      >
        <div>
          <ButtonLink to="https://www.reddit.com/r/reynanetwork/">
            <Translation id="reyna-page-rey-staking-join" /> r/reynanetwork
          </ButtonLink>
        </div>
      </StyledCallout>
      <Content>
        <Row>
          <Column>
            <H2>
              <Translation id="reyna-page-rey-staking-pos-explained" />
            </H2>
            <p>
              <Translation id="reyna-page-rey-staking-pos-explained-desc" />{" "}
              <Link to="https://academy.binance.com/en/glossary/proof-of-stake">
                <Translation id="reyna-page-rey-staking-consensus" />
              </Link>
            </p>

            <p>
              <Translation id="reyna-page-rey-staking-pos-explained-desc-1" />
            </p>
            <h3>
              <Translation id="reyna-page-rey-staking-at-stake" />
            </h3>
            <p>
              <Translation id="reyna-page-rey-staking-at-stake-desc" />
            </p>
            <h3>
              <Translation id="reyna-page-rey-base-pools" />
            </h3>
            <p>
              <Translation id="reyna-page-rey-base-pools-desc" />
            </p>
          </Column>
          <Column>
            <Box>
              <H2>
                <Translation id="reyna-page-rey-staking-upgrades-title" />
              </H2>
              <BoxText>
                <ul>
                  <li>
                    <Translation id="reyna-page-rey-staking-upgrades-li" />
                  </li>
                  <li>
                    <Translation id="reyna-page-rey-staking-upgrades-li-2" />
                  </li>
                  <li>
                    <Translation id="reyna-page-rey-staking-upgrades-li-3" />
                  </li>
                  <li>
                    <Translation id="reyna-page-rey-staking-upgrades-li-4" />
                  </li>
                  <li>
                    <Translation id="reyna-page-rey-staking-upgrades-li-5" />
                  </li>
                </ul>
              </BoxText>
            </Box>
          </Column>
        </Row>
        <H2>
          <Translation id="reyna-page-rey-staking-benefits" />
        </H2>
        <CardContainer>
          <StyledCard
            emoji=":evergreen_tree:"
            title={translateMessageId(
              "reyna-page-rey-staking-sustainability",
              intl
            )}
            description={translateMessageId(
              "reyna-page-rey-staking-sustainability-desc",
              intl
            )}
          />
          <StyledCard
            emoji=":globe_showing_americas:"
            title={translateMessageId(
              "reyna-page-rey-staking-accessibility",
              intl
            )}
            description={translateMessageId(
              "reyna-page-rey-staking-accessibility-desc",
              intl
            )}
          />
          <StyledCard
            emoji=":old_key:"
            title={translateMessageId("reyna-page-rey-staking-sharding", intl)}
            description={translateMessageId(
              "reyna-page-rey-staking-sharding-desc",
              intl
            )}
          >
            <Link to="/rey/shard-chains/">
              <Translation id="reyna-page-rey-staking-more-sharding" />
            </Link>
          </StyledCard>
        </CardContainer>
      </Content>
    </Page>
  )
}

export default StakingPage

export const poolImage = graphql`
  fragment poolImage on File {
    childImageSharp {
      fixed(height: 20) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    staking: file(relativePath: { eq: "staking-main.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    consensys: file(relativePath: { eq: "projects/consensys.png" }) {
      ...poolImage
    }
    reyhub: file(relativePath: { eq: "projects/reyhub.png" }) {
      ...poolImage
    }
    reyerscan: file(
      relativePath: { eq: "projects/reyerscan-logo-circle.png" }
    ) {
      ...poolImage
    }
  }
`
