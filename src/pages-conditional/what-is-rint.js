import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { translateMessageId } from "../utils/translations"
import Translation from "../components/Translation"
import ActionCard from "../components/ActionCard"
import Callout from "../components/Callout"
import Card from "../components/Card"
import Link from "../components/Link"
import ButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import {
  CardContainer,
  Content,
  Divider,
  Intro,
  GrayContainer,
  Page,
} from "../components/SharedStyledComponents"

const HeroContent = styled(Content)`
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1rem 2rem 2rem;
  }
`

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

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text300};
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
  background-size: cover;
  background-repeat: no-repeat;
`

const Header = styled.header`
  margin-top: 12rem;
  @media (max-width: 1280px) {
    margin-top: 8rem;
  }
  @media (max-width: 1160px) {
    margin-top: 7rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 4rem;
  }
  @media (max-width: 920px) {
    margin-top: 2rem;
  }
  @media (max-width: 870px) {
    margin-top: 1rem;
  }
  @media (max-width: 840px) {
    margin-top: 0;
  }
`

const StyledGrayContatiner = styled(GrayContainer)`
  padding: 4rem 2rem;
  margin-top: -14rem;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    margin-top: -15rem;
  }
  @media (max-width: 1160px) {
    margin-top: -14rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: -12rem;
  }
  @media (max-width: 920px) {
    margin-top: -11rem;
  }
  @media (max-width: 870px) {
    margin-top: -10rem;
  }
  @media (max-width: 810px) {
    margin-top: -9rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0rem;
    box-shadow: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 2rem 2rem;
  }
`

const ActionCardContainer = styled(CardContainer)`
  justify-content: center;
  margin-bottom: 3rem;
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

const Banner = styled(Img)`
  opacity: 0.3;
  width: 100%;
  height: 400px;
`

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 4rem;
`

const BannerMessage = styled.h2`
  position: absolute;
  width: 100%;
  padding: 0.5rem;
  top: 30%;
  text-align: center;
  font-size: 48px;
  line-height: 140%;
  margin-top: 0;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
    top: 35%;
  }
`

const ActionIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

const TwoColumnContent = styled(Content)`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Column = styled.div`
  flex: 0 0 50%;
  max-width: 75%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
  margin-bottom: 1.5rem;
`

const CardColumn = styled.div`
  flex: 0 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 3rem;
`

const SingleCard = styled(StyledCard)`
  max-width: 420px;
  min-width: 320px;
  margin: 0;
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 7rem;
    margin-left: 7rem;
  }
`

const StyledCallout = styled(Callout)`
  flex: 1 1 416px;
  min-height: 100%;
`

const cards = [
  {
    emoji: ":bank:",
    title: <Translation id="rint-page-what-is-rint-liberty" />,
    description: <Translation id="rint-page-what-is-rint-liberty-desc" />,
  },

  {
    emoji: ":detective:",
    title: <Translation id="rint-page-what-is-rint-censorship-resistance" />,
    description: (
      <Translation id="rint-page-what-is-rint-censorship-resistance-desc" />
    ),
  },
  {
    emoji: ":busts_in_silhouette:",
    title: <Translation id="rint-page-what-is-rint-security" />,
    description: <Translation id="rint-page-what-is-rint-security-desc" />,
  },
  {
    emoji: ":shield:",
    title: <Translation id="rint-page-what-is-rint-privacy" />,
    description: <Translation id="rint-page-what-is-rint-privacy-desc" />,
  },
  {
    emoji: ":cloud:",
    title: <Translation id="rint-page-what-is-rint-transparency" />,
    description: <Translation id="rint-page-what-is-rint-transparency-desc" />,
  },
  {
    emoji: ":unlock:",
    title: <Translation id="rint-page-what-is-rint-openness" />,
    description: <Translation id="rint-page-what-is-rint-openness-desc" />,
  },
  {
    emoji: ":globe_with_meridians:",
    title: <Translation id="rint-page-what-is-rint-decentralization" />,
    description: (
      <Translation id="rint-page-what-is-rint-decentralization-desc" />
    ),
  },
  {
    emoji: ":gem_stone:",
    title: <Translation id="rint-page-what-is-rint-inclusivity" />,
    description: <Translation id="rint-page-what-is-rint-inclusivity-desc" />,
  },
  {
    emoji: ":handshake:",
    title: <Translation id="rint-page-what-is-rint-continuance" />,
    description: <Translation id="rint-page-what-is-rint-continuance-desc" />,
  },
]

const WhatIsethereumPage = ({ data }) => {
  const intl = useIntl()
  const actions = [
    {
      title: <Translation id="rint-page-what-is-rint-report-2021q2" />,
      to: "https://rintnetwork.medium.com/",
      alt: translateMessageId("rint-page-what-is-rint-report-2021q2-alt", intl),
      image: data.quarterly.childImageSharp.fixed,
      description: (
        <Translation id="rint-page-what-is-rint-report-2021q2-desc" />
      ),
    },
  ]
  return (
    <Page>
      <PageMetadata
        title={translateMessageId("rint-page-what-is-rint-meta-title", intl)}
        description={translateMessageId(
          "rint-page-what-is-rint-meta-description",
          intl
        )}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <HeroContent>
        <HeroContainer>
          <Header>
            <Title>
              <Translation id="rint-page-what-is-rint-title" />
            </Title>
            <Slogan>
              <Translation id="rint-page-what-is-rint-desc" />
            </Slogan>
            <Subtitle>
              <Translation id="rint-page-what-is-rint-accessibility" />
            </Subtitle>
            <SubtitleTwo>
              <Translation id="rint-page-what-is-rint-tools-needed" />
            </SubtitleTwo>
          </Header>
          <Hero
            fluid={data.hero.childImageSharp.fluid}
            alt={translateMessageId(
              "rint-page-what-is-rint-alt-img-bird",
              intl
            )}
            loading="eager"
          />
        </HeroContainer>
      </HeroContent>
      <StyledGrayContatiner>
        <Intro>
          <p>
            <Translation id="rint-page-what-is-rint-in-depth-description" />
          </p>
        </Intro>
        <CardContainer>
          {cards.map((card, idx) => (
            <StyledCard
              key={idx}
              emoji={card.emoji}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardContainer>
      </StyledGrayContatiner>
      <BannerContainer>
        <Banner
          fluid={data.banner.childImageSharp.fluid}
          alt={translateMessageId(
            "rint-page-what-is-rint-alt-img-social",
            intl
          )}
        />
        <BannerMessage>
          <Translation id="rint-page-what-is-rint-welcome" /> <br />
          <Translation id="rint-page-what-is-rint-welcome-2" />
        </BannerMessage>
      </BannerContainer>
      <TwoColumnContent>
        <Column>
          <h2>
            <Translation id="rint-page-what-is-rint-101" />
          </h2>
          <p>
            <Translation id="rint-page-what-is-rint-101-desc" />
          </p>
          <p>
            <strong>
              <Translation id="rint-page-what-is-rint-101-strong" />
              <i>
                <Translation id="rint-page-what-is-rint-101-italic" />
              </i>
            </strong>
          </p>
          <p>
            <Translation id="rint-page-what-is-rint-101-desc-2" />
          </p>
          <p>
            <Translation id="rint-page-what-is-rint-tryit" />
          </p>
        </Column>
        <CardColumn>
          <SingleCard
            emoji=":gear:"
            title={translateMessageId(
              "rint-page-what-is-rint-singlecard-title",
              intl
            )}
            description={translateMessageId(
              "rint-page-what-is-rint-singlecard-desc",
              intl
            )}
          >
            <Link to="/learn/">
              <Translation id="rint-page-what-is-rint-singlecard-link" />
            </Link>
          </SingleCard>
        </CardColumn>
      </TwoColumnContent>
      <Content>
        <Divider />
        <ActionIntro>
          <h2>
            <Translation id="rint-page-what-is-rint-reports" />
          </h2>
          <Subtitle>
            <Translation id="rint-page-what-is-rint-reports-subtitle" />{" "}
          </Subtitle>
        </ActionIntro>
        <ActionCardContainer>
          {actions.map((action, idx) => (
            <ActionCard
              key={idx}
              to={action.to}
              alt={action.alt}
              image={action.image}
              title={action.title}
              description={action.description}
            />
          ))}
        </ActionCardContainer>
      </Content>
      <TwoColumnContent>
        <Column>
          <h2>
            <Translation id="rint-page-what-is-rint-explore" />{" "}
          </h2>
        </Column>
      </TwoColumnContent>
      <Content>
        <CardContainer>
          <StyledCallout
            image={data.developers.childImageSharp.fixed}
            title={translateMessageId("rint-page-what-is-rint-dapps", intl)}
            alt={translateMessageId(
              "rint-page-what-is-rint-alt-img-dapps",
              intl
            )}
            description={translateMessageId(
              "rint-page-what-is-rint-dapps-desc",
              intl
            )}
          >
            <div>
              <ButtonLink to="/dapps/">
                <Translation id="rint-page-what-is-rint-dapps-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            image={data.community.childImageSharp.fixed}
            title={translateMessageId("rint-page-what-is-rint-community", intl)}
            alt={translateMessageId(
              "rint-page-what-is-rint-alt-img-comm",
              intl
            )}
            description={translateMessageId(
              "page-what-is-ethereum-comm-desc",
              intl
            )}
          >
            <div>
              <ButtonLink to="/community/">
                <Translation id="rint-page-what-is-rint-meet-comm" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CardContainer>
      </Content>
    </Page>
  )
}

export default WhatIsethereumPage

export const useCaseImage = graphql`
  fragment useCaseImage on File {
    childImageSharp {
      fixed(height: 260) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
export const actionCardImage = graphql`
  fragment actionCardImage on File {
    childImageSharp {
      fixed(width: 368) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      fixed(height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "what-is-rint.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "what-is-rint.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
    banner: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "doge-computer.png" }) {
      ...actionCardImage
    }
    wallets: file(relativePath: { eq: "wallet-cropped.png" }) {
      ...actionCardImage
    }
    quarterly: file(relativePath: { eq: "quarterly-reports.png" }) {
      ...actionCardImage
    }
    dao: file(relativePath: { eq: "use-cases/dao-2.png" }) {
      ...useCaseImage
    }
    defi: file(relativePath: { eq: "finance_transparent.png" }) {
      ...useCaseImage
    }
    nft: file(relativePath: { eq: "infrastructure_transparent.png" }) {
      ...useCaseImage
    }
    developers: file(relativePath: { eq: "use-dapp.png" }) {
      ...calloutImage
    }
    community: file(relativePath: { eq: "the-rint-network-community.png" }) {
      ...calloutImage
    }
  }
`
