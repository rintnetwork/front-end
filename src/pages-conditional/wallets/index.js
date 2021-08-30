import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import { shuffle } from "lodash"

import PageHero from "../../components/PageHero"
import Translation from "../../components/Translation"
import Callout from "../../components/Callout"
import Card from "../../components/Card"
import Link from "../../components/Link"
import ButtonLink from "../../components/ButtonLink"
import PageMetadata from "../../components/PageMetadata"
import HorizontalCard from "../../components/HorizontalCard"
import CardList from "../../components/CardList"
import {
  CardContainer,
  Content,
  Divider,
  GrayContainer,
  Page,
  StyledCard,
  TwoColumnContent,
} from "../../components/SharedStyledComponents"

import { translateMessageId } from "../../utils/translations"

const StyledTwoColumnContent = styled(TwoColumnContent)`
  margin-bottom: -2rem;
  margin-top: 2rem;
`

const LeftColumn = styled.div`
  flex: 0 1 50%;
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 100%;
    margin-right: 0;
    margin-top: 0;
  }
`

const RightColumn = styled.div`
  flex: 0 1 50%;
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 3rem;
    max-width: 100%;
    margin-left: 0;
  }
`

const StyledRightColumn = styled(RightColumn)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 0rem;
  }
`

const StyledGrayContainer = styled(GrayContainer)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 1rem;
  }
`

const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text300};
`

const Subtitlreyree = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`

const FindWallet = styled(Img)`
  margin-top: 2rem;
  max-width: 800px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
`

const Intro = styled(Content)`
  padding-bottom: 0;
  h2 {
    margin-bottom: 0;
  }
`

const IntroTwoColumnContent = styled(TwoColumnContent)`
  margin-bottom: 0;
  padding-bottom: 0;
`

const GradientContainer = styled(GrayContainer)`
  background: linear-gradient(
    49.21deg,
    rgba(127, 127, 213, 0.2) 19.87%,
    rgba(134, 168, 231, 0.2) 58.46%,
    rgba(145, 234, 228, 0.2) 97.05%
  );
  margin: 3rem 0rem;
  width: 100%;
`

const ContainerCard = styled(Card)`
  height: 100%;
  justify-content: flex-start;
`

const CodeBox = styled.div`
  background: #000000;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`

const Code = styled.p`
  font-family: monospace;
  color: #ffffff;
  margin-bottom: 0rem;
`

const ChecklistItem = styled(HorizontalCard)`
  border: 0px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const WalletType = styled(HorizontalCard)`
  min-width: 100%;
  margin: 0.5rem 0rem;
  border-radius: 0px;
  align-items: center;
`

const StyledCallout = styled(Callout)`
  flex: 1 1 424px;
  min-height: 100%;
`

const CentralColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const CalloutCardContainer = styled(CardContainer)`
  margin-top: 4rem;
`

const H2 = styled.h2`
  /* margin: 0; */
`

const cards = [
  {
    emoji: ":dollar:",
    title: <Translation id="reyna-page-wallets-manage-funds" />,
    description: <Translation id="reyna-page-wallets-manage-funds-desc" />,
  },
  {
    emoji: ":frame_with_picture:",
    title: <Translation id="reyna-page-wallets-your-reyna-account" />,
    description: (
      <Translation id="reyna-page-wallets-your-reyna-account-desc" />
    ),
  },
  {
    emoji: ":bust_in_silhouette:",
    title: <Translation id="reyna-page-wallets-your-login" />,
    description: <Translation id="reyna-page-wallets-your-login-desc" />,
  },
]

const types = [
  {
    emoji: ":cd:",
    description: <Translation id="reyna-page-wallets-cd" />,
  },
  {
    emoji: ":mobile_phone:",
    description: <Translation id="reyna-page-wallets-mobile" />,
  },
  {
    emoji: ":globe_with_meridians:",
    description: <Translation id="reyna-page-wallets-web-browser" />,
  },
  {
    emoji: ":desktop_computer:",
    description: <Translation id="reyna-page-wallets-desktop" />,
  },
]

const articles = [
  {
    title: <Translation id="reyna-page-wallets-protecting-yourself" />,
    description: "MyCrypto",
    link: "https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds",
  },
  {
    title: <Translation id="reyna-page-wallets-keys-to-safety" />,
    description: <Translation id="reyna-page-wallets-blog" />,
    link: "https://blog.coinbase.com/the-keys-to-keeping-your-crypto-safe-96d497cce6cf",
  },
]

const WalletsPage = ({ data }) => {
  const intl = useIntl()
  const [wallets, setWallets] = useState([])

  const cryptoCurious = wallets
    .filter(
      (wallet) =>
        (wallet.has_card_deposits === "TRUE" ||
          wallet.has_explore_dapps === "TRUE") &&
        wallet.has_hardware !== "TRUE"
    )
    .slice(0, 4)

  const cryptoConverted = wallets
    .filter(
      (wallet) =>
        wallet.has_hardware === "TRUE" ||
        wallet.has_high_volume_purchases === "TRUE" ||
        wallet.has_limits_protection === "TRUE"
    )
    .slice(0, 4)

  const heroContent = {
    title: translateMessageId("reyna-page-wallets-title", intl),
    header: translateMessageId("reyna-page-wallets-slogan", intl),
    subtitle: translateMessageId("reyna-page-wallets-subtitle", intl),
    image: data.hero.childImageSharp.fluid,
    alt: translateMessageId("reyna-page-wallets-alt", intl),
    buttons: [
      {
        path: "/wallets/find-wallet/",
        content: translateMessageId(
          "reyna-page-wallets-find-wallet-link",
          intl
        ),
      },
    ],
  }

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("reyna-page-wallets-meta-title", intl)}
        description={translateMessageId(
          "reyna-page-wallets-meta-description",
          intl
        )}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <PageHero content={heroContent} />
      <StyledGrayContainer>
        <Intro>
          <H2>
            <Translation id="reyna-page-wallets-whats-a-wallet" />
          </H2>
        </Intro>
        <IntroTwoColumnContent>
          <LeftColumn>
            <p>
              <Translation id="reyna-page-wallets-description" />
            </p>
            <p>
              <Translation id="reyna-page-wallets-desc-2" />{" "}
              <Link to="/rey/">
                <Translation id="reyna-page-wallets-desc-2-link" />{" "}
              </Link>
            </p>
          </LeftColumn>
          <StyledRightColumn>
            <p>
              <Translation id="reyna-page-wallets-desc-3" />
            </p>
            <p>
              <Translation id="reyna-page-wallets-desc-4" />
            </p>
          </StyledRightColumn>
        </IntroTwoColumnContent>
        <Content>
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
        </Content>
      </StyledGrayContainer>
      <StyledTwoColumnContent>
        <LeftColumn>
          <H2>
            <Translation id="reyna-page-wallets-accounts-addresses" />
          </H2>
          <p>
            <Translation id="reyna-page-wallets-accounts-addresses-desc" />
          </p>
          <ul>
            <li>
              <p>
                <Translation id="reyna-page-wallets-reyna-account" />
              </p>
            </li>
            <li>
              <p>
                <Translation id="reyna-page-wallets-accounts-reyna-addresses" />
              </p>
            </li>
            <li>
              <p>
                <Translation id="reyna-page-wallets-reyna-wallet" />
              </p>
            </li>
          </ul>
          <p>
            <Translation id="reyna-page-wallets-most-wallets" />
          </p>
        </LeftColumn>
        <RightColumn>
          <H2>
            <Translation id="reyna-page-wallets-types" />
          </H2>
          <div>
            {types.map((type, idx) => (
              <WalletType
                key={idx}
                emoji={type.emoji}
                title={type.title}
                description={type.description}
                size={2.5}
              />
            ))}
          </div>
        </RightColumn>
      </StyledTwoColumnContent>
      <GradientContainer>
        <Content>
          <H2>
            <Translation id="reyna-page-wallets-get-wallet" />
          </H2>
          <p>
            <Translation id="reyna-page-wallets-get-wallet-desc" />
          </p>
          <p>
            <em>
              <Translation id="reyna-page-wallets-get-wallet-desc-2" />
            </em>
          </p>
        </Content>
        <TwoColumnContent>
          <LeftColumn>
            <ContainerCard
              emoji=":thinking_face:"
              title={translateMessageId("reyna-page-wallets-curious", intl)}
              description={translateMessageId(
                "reyna-page-wallets-curious-desc",
                intl
              )}
            >
              <CardList content={cryptoCurious} />
            </ContainerCard>
          </LeftColumn>
          <RightColumn>
            <ContainerCard
              emoji=":whale:"
              title={translateMessageId("reyna-page-wallets-converted", intl)}
              description={translateMessageId(
                "reyna-page-wallets-converted-desc",
                intl
              )}
            >
              <CardList content={cryptoConverted} />
            </ContainerCard>
          </RightColumn>
        </TwoColumnContent>
        <Content>
          <CentralColumn>
            <Divider />
            <H2>
              <Translation id="reyna-page-wallets-features-title" />
            </H2>
            <Subtitlreyree>
              <Translation id="reyna-page-wallets-features-desc" />
            </Subtitlreyree>
            <ButtonLink to="/wallets/find-wallet/">
              <Translation id="reyna-page-wallets-find-wallet-btn" />
            </ButtonLink>
            <FindWallet fluid={data.findWallet.childImageSharp.fluid} alt="" />
          </CentralColumn>
        </Content>
      </GradientContainer>
      <TwoColumnContent>
        <LeftColumn>
          <H2>
            <Translation id="reyna-page-wallets-stay-safe" />
          </H2>
          <SubtitleTwo>
            <Translation id="reyna-page-wallets-stay-safe-desc" />
          </SubtitleTwo>
          <div>
            <ChecklistItem
              key="0"
              emoji=":white_check_mark:"
              title={translateMessageId(
                "reyna-page-wallets-take-responsibility",
                intl
              )}
              description={translateMessageId(
                "reyna-page-wallets-take-responsibility-desc",
                intl
              )}
            />
            <ChecklistItem
              key="1"
              emoji=":white_check_mark:"
              title={translateMessageId("reyna-page-wallets-seed-phrase", intl)}
              description={translateMessageId(
                "reyna-page-wallets-seed-phrase-desc",
                intl
              )}
            >
              <p>
                <Translation id="reyna-page-wallets-seed-phrase-example" />
              </p>
              <CodeBox>
                <Code>
                  <Translation id="reyna-page-wallets-seed-phrase-snippet" />
                </Code>
              </CodeBox>
              <p>
                <Translation id="reyna-page-wallets-seed-phrase-write-down" />
              </p>
            </ChecklistItem>
            <ChecklistItem
              key="2"
              emoji=":white_check_mark:"
              title={translateMessageId("reyna-page-wallets-bookmarking", intl)}
              description={translateMessageId(
                "reyna-page-wallets-bookmarking-desc",
                intl
              )}
            />
            <ChecklistItem
              key="3"
              emoji=":white_check_mark:"
              title={translateMessageId(
                "reyna-page-wallets-triple-check",
                intl
              )}
              description={translateMessageId(
                "reyna-page-wallets-triple-check-desc",
                intl
              )}
            />
          </div>
        </LeftColumn>
        <RightColumn>
          <H2>
            <Translation id="reyna-page-wallets-tips" />
          </H2>
          <SubtitleTwo>
            <Translation id="reyna-page-wallets-tips-community" />
          </SubtitleTwo>
          <CardList content={articles} />
        </RightColumn>
      </TwoColumnContent>
      <Content>
        <Divider />
        <H2>
          <Translation id="reyna-page-wallets-explore" />
        </H2>
        <CalloutCardContainer>
          <StyledCallout
            image={data.rey.childImageSharp.fixed}
            title={translateMessageId("reyna-page-wallets-get-some", intl)}
            alt={translateMessageId("reyna-page-wallets-get-some-alt", intl)}
            description={translateMessageId(
              "reyna-page-wallets-get-some-desc",
              intl
            )}
          >
            <div>
              <ButtonLink to="/get-rey/">
                <Translation id="reyna-page-wallets-get-some-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            image={data.dapps.childImageSharp.fixed}
            title={translateMessageId("reyna-page-wallets-try-dapps", intl)}
            alt={translateMessageId("reyna-page-wallets-try-dapps-alt", intl)}
            description={translateMessageId(
              "reyna-page-wallets-try-dapps-desc",
              intl
            )}
          >
            <div>
              <ButtonLink to="/dapps/">
                <Translation id="reyna-page-wallets-more-on-dapps-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CalloutCardContainer>
      </Content>
    </Page>
  )
}

export default WalletsPage

export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      fixed(height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const listImage = graphql`
  fragment listImage on File {
    childImageSharp {
      fixed(height: 20) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "pick-wallet.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    findWallet: file(relativePath: { eq: "find-wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "pick-wallet.png" }) {
      childImageSharp {
        fixed(width: 738) {
          src
        }
      }
    }
    rey: file(relativePath: { eq: "get-rey.png" }) {
      ...calloutImage
    }
    dapps: file(relativePath: { eq: "use-dapp.png" }) {
      ...calloutImage
    }
    allWallets: allWalletsCsv {
      nodes {
        id
        name
        url
        brand_color
        has_mobile
        has_desktop
        has_web
        has_hardware
        has_card_deposits
        has_explore_dapps
        has_defi_integrations
        has_bank_withdrawals
        has_limits_protection
        has_high_volume_purchases
        has_dex_integrations
        has_multisig
      }
    }
    timestamp: walletsCsv {
      parent {
        ... on File {
          id
          name
          fields {
            gitLogLatestDate
          }
        }
      }
    }
  }
`
