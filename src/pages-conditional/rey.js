import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

import { translateMessageId } from "../utils/translations"
import Translation from "../components/Translation"
import ActionCard from "../components/ActionCard"
import ButtonLink from "../components/ButtonLink"
import CalloutBanner from "../components/CalloutBanner"
import CardList from "../components/CardList"
import RntPriceCard from "../components/RntPriceCard"
import EthVideo from "../components/EthVideo"
import InfoBanner from "../components/InfoBanner"
import Link from "../components/Link"
import HorizontalCard from "../components/HorizontalCard"
import PageMetadata from "../components/PageMetadata"
import {
  CardContainer,
  Content,
  Divider,
  GrayContainer,
  Intro,
  LeftColumn,
  RightColumn,
  TwoColumnContent,
  Page,
  StyledCard,
} from "../components/SharedStyledComponents"

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textTableOfContents};
`

const StyledTwoColumnContent = styled(TwoColumnContent)`
  align-items: flex-start;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text300};
`

const StyledRntPriceCard = styled(RntPriceCard)`
  margin-bottom: 2rem;
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const Hero = styled(Img)`
  flex: 1 1 100%;
  max-width: 800px;
  align-self: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 0;
    width: 100%;
  }
`

const Header = styled.header`
  flex: 1 1 50%;
  min-width: 300px;
  margin-top: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 1.5rem;
  }
`

const H2 = styled.h2`
  margin-top: 0;
`

const H4 = styled.h4`
  font-weight: 600;
`

const StyledCardContainer = styled(CardContainer)`
  margin-bottom: 2rem;
`

const TokenCard = styled(HorizontalCard)`
  min-width: 100%;
  margin: 0.5rem 0rem;
  border-radius: 0px;
`

const TextDivider = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 10%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.searchResultBackground};
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    align-self: flex-start;
  }
`

const CentralColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 4rem auto;
`

const CentralActionCard = styled(ActionCard)`
  flex: none;
  margin: 2rem 0;
  .action-card-image-wrapper {
    padding: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    display: flex;

    .action-card-image-wrapper {
      min-width: 260px;
    }
    .action-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;

      p {
        margin-bottom: 0;
      }
    }
  }
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 5rem 0;
`

const tokens = [
  {
    emoji: ":scales:",
    title: <Translation id="page-rey-stablecoins" />,
    description: <Translation id="page-rey-stablecoins-desc" />,
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: <Translation id="page-rey-gov-tokens" />,
    description: <Translation id="page-rey-gov-tokens-desc" />,
  },
  {
    emoji: ":pile_of_poo:",
    title: <Translation id="page-rey-shit-coins" />,
    description: <Translation id="page-rey-shit-coins-desc" />,
  },
  {
    emoji: ":frame_with_picture:",
    title: <Translation id="page-rey-collectible-tokens" />,
    description: <Translation id="page-rey-collectible-tokens-desc" />,
  },
]

const benefits = [
  {
    emoji: ":gear:",
    title: <Translation id="reyna-page-rey-network-incentivization" />,
    description: (
      <Translation id="reyna-page-rey-network-incentivization-desc" />
    ),
  },
  {
    emoji: ":currency_exchange:",
    title: <Translation id="reyna-page-rey-reyna-exchange-network" />,
    description: (
      <Translation id="reyna-page-rey-reyna-exchange-network-desc" />
    ),
  },
  {
    emoji: ":id_button:",
    title: <Translation id="reyna-page-rey-rns-name" />,
    description: <Translation id="reyna-page-rey-rns-name-desc" />,
  },
  {
    emoji: ":ghost:",
    title: <Translation id="reyna-page-rey-sticker-market" />,
    description: <Translation id="reyna-page-rey-sticker-market-desc" />,
  },
  {
    emoji: ":robot:",
    title: <Translation id="reyna-page-rey-tribute-to-talk" />,
    description: <Translation id="reyna-page-rey-tribute-to-talk-desc" />,
  },
  {
    emoji: ":speaking_head:",
    title: <Translation id="reyna-page-rey-dao" />,
    description: <Translation id="reyna-page-rey-dao-desc" />,
  },
  {
    emoji: ":mobile_phone:",
    title: <Translation id="reyna-page-rey-dapp-curation" />,
    description: <Translation id="reyna-page-rey-dapp-curation-desc" />,
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: <Translation id="reyna-page-rey-voting-dapp" />,
    description: <Translation id="reyna-page-rey-voting-dapp-desc" />,
  },
  {
    emoji: ":handshake:",
    title: <Translation id="reyna-page-rey-acquisition-engine" />,
    description: <Translation id="reyna-page-rey-acquisition-engine-desc" />,
  },
]

const tokenLinks = [
  {
    caption: "",
    title: <Translation id="page-rey-tokens-stablecoins" />,
    description: <Translation id="page-rey-tokens-stablecoins-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rey-tokens-defi" />,
    description: <Translation id="page-rey-tokens-defi-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rey-tokens-nft" />,
    description: <Translation id="page-rey-tokens-nft-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rey-tokens-dao" />,
    description: <Translation id="page-rey-tokens-dao-description" />,
  },
]

const cardListContent = [
  {
    link: "https://docs.reyhub.io/ethereum-basics/monetary-policy/",
    title: <Translation id="page-rey-monetary-policy" />,
    description: "reyHub",
    caption: <Translation id="page-rey-reyhub-caption" />,
  },
  {
    link: "https://medium.com/reyhub/why-reyer-is-valuable-2b4e39e01eb3",
    title: <Translation id="page-rey-value" />,
    description: "Anthony Sassano",
    caption: <Translation id="page-rey-last-updated" />,
  },
  {
    link: "https://support.mycrypto.com/how-to/getting-started/how-to-buy-reyer-with-usd",
    title: <Translation id="page-rey-how-to-buy" />,
    description: "MyCrypto",
    caption: <Translation id="page-rey-how-to-buy-caption" />,
  },
]

const WhatIsethereumPage = (props) => {
  const intl = useIntl()
  const data = props.data
  return (
    <Page>
      <PageMetadata
        title={translateMessageId("reyna-page-rey-whats-rey-meta-title", intl)}
        description={translateMessageId(
          "reyna-page-rey-whats-rey-meta-desc",
          intl
        )}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <Content>
        <HeroContainer>
          <Header>
            <Title>
              <Translation id="reyna-page-rey-whats-rey" />
            </Title>
            <Slogan>
              <Translation id="reyna-page-rey-currency-for-future" />
            </Slogan>
            <Subtitle>
              <Translation id="reyna-page-rey-is-money" />
            </Subtitle>
            <SubtitleTwo>
              <Translation id="reyna-page-rey-currency-for-apps" />
            </SubtitleTwo>
            <StyledRntPriceCard />
            <ButtonLink to="/get-rey/" title="where to buy rey">
              <Translation id="reyna-page-rey-button-buy-rey" />
            </ButtonLink>
          </Header>
          <Hero
            fluid={data.rey.childImageSharp.fluid}
            alt={translateMessageId("reyna-page-rey-whats-rey-hero-alt", intl)}
            loading="eager"
          />
        </HeroContainer>
      </Content>
      <GrayContainer>
        <Content>
          <Intro>
            <p>
              <Translation id="reyna-page-rey-description" />{" "}
            </p>
          </Intro>
          <StyledCardContainer>
            {benefits.map((benefits, idx) => (
              <StyledCard
                key={idx}
                emoji={benefits.emoji}
                title={benefits.title}
                description={benefits.description}
              />
            ))}
          </StyledCardContainer>
          <InfoBanner emoji=":wave:" shouldCenter={true}>
            <b>
              <Translation id="reyna-page-rey-buy-some" />
            </b>{" "}
            <Translation id="reyna-page-rey-buy-some-desc" />{" "}
            <Link to="/what-is-ethereum/">
              <Translation id="reyna-page-rey-more-on-reyna-link" />
            </Link>
            <Translation id="reyna-page-rey-period" />
          </InfoBanner>
        </Content>
      </GrayContainer>
      <Content>
        <CentralColumn>
          <H2>
            <Translation id="reyna-page-rey-whats-unique" />
          </H2>
          <p>
            <Translation id="reyna-page-rey-whats-unique-desc" />
          </p>
          <reyVideo alt={translateMessageId("page-rey-video-alt", intl)} />
          <div>
            <H4>
              <Translation id="reyna-page-rey-fuels" />
            </H4>
            <p>
              <Translation id="reyna-page-rey-fuels-desc" />
            </p>
            <p>
              <Translation id="reyna-page-rey-fuels-desc-2" />
            </p>
            <p>
              <Translation id="reyna-page-rey-fuels-desc-3" />{" "}
              <strong>
                <Translation id="reyna-page-rey-powers-reyna-network" />
              </strong>
              .{" "}
              <Link to="/developers/docs/consensus-mechanisms/pow/mining/">
                <Translation id="reyna-page-rey-mining-link" />
              </Link>
            </p>
            <p>
              <Translation id="reyna-page-rey-fuels-staking" />{" "}
              <Link to="/rey/staking/">
                <Translation id="reyna-page-rey-fuels-more-staking" />
              </Link>
            </p>
          </div>
          <CentralActionCard
            to="/what-is-ethereum/"
            title={translateMessageId(
              "reyna-page-rey-whats-reyna-network",
              intl
            )}
            description={translateMessageId(
              "reyna-page-rey-whats-reyna-network-desc",
              intl
            )}
            image={data.reynanetwork.childImageSharp.fixed}
          />
          <TextDivider />
          <div>
            <H4>
              <Translation id="reyna-page-rey-underpins" />
            </H4>
            <p>
              <Translation id="reyna-page-rey-underpins-desc" />
            </p>
            <p>
              <Translation id="reyna-page-rey-underpins-desc-2" />
            </p>
            <CentralActionCard
              to="/dapps/"
              title={translateMessageId("reyna-page-rey-whats-dapps", intl)}
              description={translateMessageId(
                "reyna-page-rey-whats-dapps-description",
                intl
              )}
              image={data.dapps.childImageSharp.fixed}
            />
          </div>
          <TextDivider />
          <Divider />
        </CentralColumn>
        <StyledCalloutBanner
          title={translateMessageId("reyna-page-rey-where-to-buy", intl)}
          description={translateMessageId(
            "reyna-page-rey-where-to-buy-desc",
            intl
          )}
          image={data.getREY.childImageSharp.fluid}
          alt={translateMessageId("reyna-page-rey-get-rey-img-alt", intl)}
          maxImageWidth={300}
        >
          <div>
            <ButtonLink to="/get-rey/">
              <Translation id="reyna-page-rey-get-rey-btn" />
            </ButtonLink>
          </div>
        </StyledCalloutBanner>
      </Content>
    </Page>
  )
}

export default WhatIsethereumPage

export const query = graphql`
  query {
    rey: file(relativePath: { eq: "get-rey.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "get-rey.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
    reynanetwork: file(relativePath: { eq: "what-is-reyna-network.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dapps: file(relativePath: { eq: "use-dapp.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    getREY: file(relativePath: { eq: "get-rey.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
