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

const StyledrntPriceCard = styled(RntPriceCard)`
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
    title: <Translation id="page-rnt-stablecoins" />,
    description: <Translation id="page-rnt-stablecoins-desc" />,
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: <Translation id="page-rnt-gov-tokens" />,
    description: <Translation id="page-rnt-gov-tokens-desc" />,
  },
  {
    emoji: ":pile_of_poo:",
    title: <Translation id="page-rnt-shit-coins" />,
    description: <Translation id="page-rnt-shit-coins-desc" />,
  },
  {
    emoji: ":frame_with_picture:",
    title: <Translation id="page-rnt-collectible-tokens" />,
    description: <Translation id="page-rnt-collectible-tokens-desc" />,
  },
]

const benefits = [
  {
    emoji: ":gear:",
    title: <Translation id="rint-page-rnt-network-incentivization" />,
    description: (
      <Translation id="rint-page-rnt-network-incentivization-desc" />
    ),
  },
  {
    emoji: ":currency_exchange:",
    title: <Translation id="rint-page-rnt-rint-exchange-network" />,
    description: <Translation id="rint-page-rnt-rint-exchange-network-desc" />,
  },
  {
    emoji: ":id_button:",
    title: <Translation id="rint-page-rnt-rns-name" />,
    description: <Translation id="rint-page-rnt-rns-name-desc" />,
  },
  {
    emoji: ":ghost:",
    title: <Translation id="rint-page-rnt-sticker-market" />,
    description: <Translation id="rint-page-rnt-sticker-market-desc" />,
  },
  {
    emoji: ":robot:",
    title: <Translation id="rint-page-rnt-tribute-to-talk" />,
    description: <Translation id="rint-page-rnt-tribute-to-talk-desc" />,
  },
  {
    emoji: ":speaking_head:",
    title: <Translation id="rint-page-rnt-dao" />,
    description: <Translation id="rint-page-rnt-dao-desc" />,
  },
  {
    emoji: ":mobile_phone:",
    title: <Translation id="rint-page-rnt-dapp-curation" />,
    description: <Translation id="rint-page-rnt-dapp-curation-desc" />,
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: <Translation id="rint-page-rnt-voting-dapp" />,
    description: <Translation id="rint-page-rnt-voting-dapp-desc" />,
  },
  {
    emoji: ":handshake:",
    title: <Translation id="rint-page-rnt-acquisition-engine" />,
    description: <Translation id="rint-page-rnt-acquisition-engine-desc" />,
  },
]

const tokenLinks = [
  {
    caption: "",
    title: <Translation id="page-rnt-tokens-stablecoins" />,
    description: <Translation id="page-rnt-tokens-stablecoins-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rnt-tokens-defi" />,
    description: <Translation id="page-rnt-tokens-defi-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rnt-tokens-nft" />,
    description: <Translation id="page-rnt-tokens-nft-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-rnt-tokens-dao" />,
    description: <Translation id="page-rnt-tokens-dao-description" />,
  },
]

const cardListContent = [
  {
    link: "https://docs.rnthub.io/ethereum-basics/monetary-policy/",
    title: <Translation id="page-rnt-monetary-policy" />,
    description: "rntHub",
    caption: <Translation id="page-rnt-rnthub-caption" />,
  },
  {
    link: "https://medium.com/rnthub/why-rnter-is-valuable-2b4e39e01eb3",
    title: <Translation id="page-rnt-value" />,
    description: "Anthony Sassano",
    caption: <Translation id="page-rnt-last-updated" />,
  },
  {
    link: "https://support.mycrypto.com/how-to/getting-started/how-to-buy-rnter-with-usd",
    title: <Translation id="page-rnt-how-to-buy" />,
    description: "MyCrypto",
    caption: <Translation id="page-rnt-how-to-buy-caption" />,
  },
]

const WhatIsethereumPage = (props) => {
  const intl = useIntl()
  const data = props.data
  return (
    <Page>
      <PageMetadata
        title={translateMessageId("rint-page-rnt-whats-rnt-meta-title", intl)}
        description={translateMessageId(
          "rint-page-rnt-whats-rnt-meta-desc",
          intl
        )}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <Content>
        <HeroContainer>
          <Header>
            <Title>
              <Translation id="rint-page-rnt-whats-rnt" />
            </Title>
            <Slogan>
              <Translation id="rint-page-rnt-currency-for-future" />
            </Slogan>
            <Subtitle>
              <Translation id="rint-page-rnt-is-money" />
            </Subtitle>
            <SubtitleTwo>
              <Translation id="rint-page-rnt-currency-for-apps" />
            </SubtitleTwo>
            <StyledrntPriceCard />
            <ButtonLink to="/get-rnt/" title="where to buy rnt">
              <Translation id="rint-page-rnt-button-buy-rnt" />
            </ButtonLink>
          </Header>
          <Hero
            fluid={data.rnt.childImageSharp.fluid}
            alt={translateMessageId("rint-page-rnt-whats-rnt-hero-alt", intl)}
            loading="eager"
          />
        </HeroContainer>
      </Content>
      <GrayContainer>
        <Content>
          <Intro>
            <p>
              <Translation id="rint-page-rnt-description" />{" "}
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
              <Translation id="rint-page-rnt-buy-some" />
            </b>{" "}
            <Translation id="rint-page-rnt-buy-some-desc" />{" "}
            <Link to="/what-is-ethereum/">
              <Translation id="rint-page-rnt-more-on-rint-link" />
            </Link>
            <Translation id="rint-page-rnt-period" />
          </InfoBanner>
        </Content>
      </GrayContainer>
      <Content>
        <CentralColumn>
          <H2>
            <Translation id="rint-page-rnt-whats-unique" />
          </H2>
          <p>
            <Translation id="rint-page-rnt-whats-unique-desc" />
          </p>
          <rntVideo alt={translateMessageId("page-rnt-video-alt", intl)} />
          <div>
            <H4>
              <Translation id="rint-page-rnt-fuels" />
            </H4>
            <p>
              <Translation id="rint-page-rnt-fuels-desc" />
            </p>
            <p>
              <Translation id="rint-page-rnt-fuels-desc-2" />
            </p>
            <p>
              <Translation id="rint-page-rnt-fuels-desc-3" />{" "}
              <strong>
                <Translation id="rint-page-rnt-powers-rint-network" />
              </strong>
              .{" "}
              <Link to="/developers/docs/consensus-mechanisms/pow/mining/">
                <Translation id="rint-page-rnt-mining-link" />
              </Link>
            </p>
            <p>
              <Translation id="rint-page-rnt-fuels-staking" />{" "}
              <Link to="/rnt/staking/">
                <Translation id="rint-page-rnt-fuels-more-staking" />
              </Link>
            </p>
          </div>
          <CentralActionCard
            to="/what-is-ethereum/"
            title={translateMessageId("rint-page-rnt-whats-rint-network", intl)}
            description={translateMessageId(
              "rint-page-rnt-whats-rint-network-desc",
              intl
            )}
            image={data.rintnetwork.childImageSharp.fixed}
          />
          <TextDivider />
          <div>
            <H4>
              <Translation id="rint-page-rnt-underpins" />
            </H4>
            <p>
              <Translation id="rint-page-rnt-underpins-desc" />
            </p>
            <p>
              <Translation id="rint-page-rnt-underpins-desc-2" />
            </p>
            <CentralActionCard
              to="/dapps/"
              title={translateMessageId("rint-page-rnt-whats-dapps", intl)}
              description={translateMessageId(
                "rint-page-rnt-whats-dapps-description",
                intl
              )}
              image={data.dapps.childImageSharp.fixed}
            />
          </div>
          <TextDivider />
          <Divider />
        </CentralColumn>
        <StyledCalloutBanner
          title={translateMessageId("rint-page-rnt-where-to-buy", intl)}
          description={translateMessageId(
            "rint-page-rnt-where-to-buy-desc",
            intl
          )}
          image={data.getRNT.childImageSharp.fluid}
          alt={translateMessageId("rint-page-rnt-get-rnt-img-alt", intl)}
          maxImageWidth={300}
        >
          <div>
            <ButtonLink to="/get-rnt/">
              <Translation id="rint-page-rnt-get-rnt-btn" />
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
    rnt: file(relativePath: { eq: "get-rnt.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "get-rnt.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
    rintnetwork: file(relativePath: { eq: "what-is-rint-network.png" }) {
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
    getRNT: file(relativePath: { eq: "get-rnt.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
