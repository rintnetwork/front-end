import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { useIntl, navigate } from "gatsby-plugin-intl"
import { translateMessageId } from "../utils/translations"
import Translation from "../components/Translation"
import Pill from "../components/Pill"
import BoxGrid from "../components/BoxGrid"
import Card from "../components/Card"
import Callout from "../components/Callout"
import CalloutBanner from "../components/CalloutBanner"
import ProductCard from "../components/ProductCard"
import GhostCard from "../components/GhostCard"
import Link from "../components/Link"
import InfoBanner from "../components/InfoBanner"
import DocLink from "../components/DocLink"
import Emoji from "../components/Emoji"
import ButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import ProductList from "../components/ProductList"
import PageHero from "../components/PageHero"
import {
  ButtonSecondary,
  ButtonPrimary,
  CardGrid,
  Content,
  Page,
  CenterDivider,
  Divider,
} from "../components/SharedStyledComponents"

const MagiciansImage = styled(Img)`
  background-size: cover;
  background-repeat: no-repeat;
  align-self: center;
  width: 100%;
  min-width: 240px;
  max-width: 300px;
  margin: 2rem 6rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin: 2rem 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin: 2rem 0rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButtonSecondary = styled(ButtonSecondary)`
  margin-top: 0;
`

const StyledGhostCard = styled(GhostCard)`
  .ghost-card-base {
    display: flex;
    justify-content: center;
  }
`

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 20px;
  }
`

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const IntroRow = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.background};
  border-radius: 32px;
  padding: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const TwoColumnContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0rem;
    margin-right: 0rem;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  margin-top: 0.5rem;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`

const StyledInfoBanner = styled(InfoBanner)`
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
  }
`

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    width: 100%;
  }
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 8rem 0 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 0;
  }
`

const MobileOptionContainer = styled(OptionContainer)`
  text-align: center;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`

const Option = styled.div`
  border-radius: 2rem;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  box-shadow: ${(props) =>
    props.isActive ? props.theme.colors.tableBoxShadow : `none`};
  display: flex;
  color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.text};
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }
`

const OptionText = styled.div`
  font-size: 24px;
  line-height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 16px;
    font-weight: 600;
  }
`

const Column = styled.div`
  flex: 1 1 75%;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const FullWidthContainer = styled(Page)`
  margin: 0rem 0rem;
  margin-bottom: 4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.ednBackground};
  padding: 2rem 0rem;
  padding-top: 4rem;
`

const CardContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: 1fr;
  }
`

const CenteredCard = styled(Card)`
  text-align: center;
`

const StepBoxContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0rem;
  margin-bottom: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-wrap: wrap;
  }
`

const StepBox = styled(Link)`
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.background};
  padding: 0rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  width: 100%;
  &:hover {
    background: ${(props) => props.theme.colors.ednBackground};
    transition: transform 0.2s;
    transform: scale(1.05);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
  }
`

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  a {
    display: none;
  }
`

const CenterText = styled.p`
  text-align: center;
  max-width: 800px;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 1.5rem;
    margin-bottom: 1rem;
  }
`

const LeftColumn = styled.div`
  margin-right: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
  }
`

const RightColumn = styled.div`
  margin-left: 2rem;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: auto 0rem;
  }
`
const About = styled.div`
  margin-top: 3rem;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    align-items: flex-start;
  }
`

const BoxText = styled.p`
  text-align: center;
  max-width: 800px;
  margin-bottom: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    text-align: left;
  }
`

const TextNoMargin = styled.p`
  margin-bottom: 0rem;
  margin-right: 1rem;
`
const AddDapp = styled.div`
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 1.5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const AddDappButton = styled(ButtonLink)`
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-left: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-top: 2rem;
    margin-left: 0rem;
  }
`

const StyledDocLink = styled(DocLink)``

const StyledCallout = styled(Callout)`
  flex: 1 1 416px;
  min-height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 12rem;
  }
`

const StyledCardGrid = styled(CardGrid)`
  margin-bottom: 4rem;
  margin-top: 4rem;
`

const MoreButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const FINANCE = "finance"
const TECHNOLOGY = "technology"
const COLLECTIBLES = "collectibles"
const GAMING = "gaming"

const DappsPage = ({ data, location }) => {
  const intl = useIntl()
  const [selectedCategory, setCategory] = useState(FINANCE)
  const explore = useRef(null)

  useEffect(() => {
    // Fetch category on load
    const queryParamCategories = new URLSearchParams(location.search || "").get(
      "category"
    ) // Comma separated string
    const selectedCategory = queryParamCategories
      ? queryParamCategories.split(",")[0]
      : FINANCE // Default to finance category if empty
    setCategory(
      [FINANCE, TECHNOLOGY, COLLECTIBLES, GAMING].includes(selectedCategory)
        ? selectedCategory
        : FINANCE
    )
    if (location.hash.length > 0 && location.hash[0] === "#") {
      navigate(location.hash)
    } else if (window && queryParamCategories && explore.current) {
      window.scrollTo({
        top: explore.current.offsetTop - 76,
        behavior: "smooth",
      })
    }
  }, [location.search])

  const updatePath = (selectedCategory, isMobile) => {
    // Update URL path with new filter query params
    let newPath = `/dapps/?category=${selectedCategory || FINANCE}`
    // If "mobile" option at bottom of the page...
    if (isMobile) {
      // Add #explore and refresh
      newPath += "#explore"
      navigate(newPath)
    } else {
      // If within `window` and not in the bottom mobile selection...
      if (window) {
        newPath = `/${intl.locale}${newPath}`
        // Apply new path without page refresh
        window.history.pushState(null, "", newPath)
      } else {
        // Otherwise refresh
        navigate(newPath)
      }
    }
  }

  const handleCategorySelect = (category, isMobile = false) => {
    setCategory(category)
    updatePath(category, isMobile)
  }

  const features = [
    {
      title: translateMessageId("rint-page-dapps-features-1-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-1-description",
        intl
      ),
      emoji: ":bust_in_silhouette:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-2-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-2-description",
        intl
      ),
      emoji: ":megaphone:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-3-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-3-description",
        intl
      ),
      emoji: ":money-mouth_face:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-4-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-4-description",
        intl
      ),
      emoji: ":electric_plug:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-5-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-5-description",
        intl
      ),
      emoji: ":detective:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-6-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-6-description",
        intl
      ),
      emoji: ":key:",
    },
    {
      title: translateMessageId("rint-page-dapps-features-7-title", intl),
      description: translateMessageId(
        "rint-page-dapps-features-7-description",
        intl
      ),
      emoji: ":antenna_with_bars:",
    },
  ]

  const categories = {
    finance: {
      title: translateMessageId("rint-page-dapps-finance-button", intl),
      emoji: ":money_with_wings:",
      benefitsTitle: translateMessageId(
        "rint-page-dapps-finance-benefits-title",
        intl
      ),
      benefitsDescription: translateMessageId(
        "rint-page-dapps-finance-benefits-description",
        intl
      ),
      benefits: [
        {
          emoji: ":open_lock:",
          title: translateMessageId(
            "rint-page-dapps-finance-benefits-1-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-finance-benefits-1-description",
            intl
          ),
        },
        {
          emoji: ":bank:",
          title: translateMessageId(
            "page-dapps-finance-benefits-2-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-finance-benefits-2-description",
            intl
          ),
        },
        {
          emoji: ":scales:",
          title: translateMessageId(
            "page-dapps-finance-benefits-3-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-finance-benefits-3-description",
            intl
          ),
        },
        {
          emoji: ":chains:",
          title: translateMessageId(
            "page-dapps-finance-benefits-4-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-finance-benefits-4-description",
            intl
          ),
        },
      ],
    },
    collectibles: {
      title: translateMessageId("rint-page-dapps-collectibles-button", intl),
      emoji: ":frame_with_picture:",
      benefitsTitle: translateMessageId(
        "page-dapps-collectibles-benefits-title",
        intl
      ),
      benefitsDescription: translateMessageId(
        "page-dapps-collectibles-benefits-description",
        intl
      ),
      benefits: [
        {
          emoji: ":white_check_mark:",
          title: translateMessageId(
            "page-dapps-collectibles-benefits-1-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-collectibles-benefits-1-description",
            intl
          ),
        },
        {
          emoji: ":man_singer:",
          title: translateMessageId(
            "page-dapps-collectibles-benefits-2-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-collectibles-benefits-2-description",
            intl
          ),
        },
        {
          emoji: ":shopping_bags:",
          title: translateMessageId(
            "page-dapps-collectibles-benefits-3-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-collectibles-benefits-3-description",
            intl
          ),
        },
        {
          emoji: ":department_store:",
          title: translateMessageId(
            "page-dapps-collectibles-benefits-4-title",
            intl
          ),
          description: translateMessageId(
            "page-dapps-collectibles-benefits-4-description",
            intl
          ),
        },
      ],
    },
    gaming: {
      title: translateMessageId("rint-page-dapps-gaming-button", intl),
      emoji: ":video_game:",
      benefitsTitle: translateMessageId(
        "page-dapps-gaming-benefits-title",
        intl
      ),
      benefitsDescription: translateMessageId(
        "page-dapps-gaming-benefits-description",
        intl
      ),
      benefits: [
        {
          emoji: ":crossed_swords:",
          title: translateMessageId("page-dapps-gaming-benefits-1-title", intl),
          description: translateMessageId(
            "page-dapps-gaming-benefits-1-description",
            intl
          ),
        },
        {
          emoji: ":european_castle:",
          title: translateMessageId("page-dapps-gaming-benefits-2-title", intl),
          description: translateMessageId(
            "page-dapps-gaming-benefits-2-description",
            intl
          ),
        },
        {
          emoji: ":handshake:",
          title: translateMessageId("page-dapps-gaming-benefits-3-title", intl),
          description: translateMessageId(
            "page-dapps-gaming-benefits-3-description",
            intl
          ),
        },
      ],
    },
    technology: {
      title: translateMessageId("rint-page-dapps-technology-button", intl),
      emoji: ":keyboard:",
    },
  }

  const categoryKeys = Object.keys(categories)

  const investments = [
    {
      title: "Rint Network",
      description: translateMessageId(
        "rint-page-dapps-description-exchange",
        intl
      ),
      link: "https://exchange.rint.network/",
      image: data.rintexchange.childImageSharp.fluid,
      alt: translateMessageId("rint-page-dapps-token-exchange-logo-alt", intl),
    },
  ]

  const utilities = [
    {
      title: "Rint Messenger",
      description: translateMessageId(
        "rint-page-dapps-description-messenger",
        intl
      ),
      link: "https://messenger.rint.network/",
      image: data.rintmessenger.childImageSharp.fluid,
      alt: translateMessageId("rint-page-dapps-messenger-logo-alt", intl),
    },
  ]

  const music = [
    {
      title: "Rint Foundation",
      description: translateMessageId(
        "rint-page-dapps-description-foundation",
        intl
      ),
      link: "https://foundation.rint.network/",
      image: data.rintfoundation.childImageSharp.fluid,
      alt: translateMessageId("rint-page-dapps-foundation-logo-alt", intl),
    },
  ]

  const worlds = [
    {
      title: "Rint Casino",
      description: translateMessageId(
        "rint-page-dapps-description-casino",
        intl
      ),
      link: "https://casino.rint.network/",
      image: data.rintcasino.childImageSharp.fluid,
      alt: translateMessageId("rint-page-dapps-casino-logo-alt", intl),
    },
  ]

  const heroContent = {
    title: translateMessageId("decentralized-applications-dapps", intl),
    header: translateMessageId("rint-page-dapps-hero-header", intl),
    subtitle: translateMessageId("rint-page-dapps-hero-subtitle", intl),
    image: data.getdapp.childImageSharp.fluid,
    alt: translateMessageId("rint-page-dapps-getdapp-img-alt", intl),
    buttons: [
      {
        content: translateMessageId(
          "rint-page-dapps-explore-dapps-title",
          intl
        ),
        path: "#explore",
      },
      {
        content: translateMessageId("rint-page-dapps-what-are-dapps", intl),
        path: "#what-are-dapps",
        isSecondary: "isSecondary",
      },
    ],
  }

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("decentralized-applications-dapps", intl)}
        description={translateMessageId("page-dapps-desc", intl)}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <PageHero content={heroContent} />
      <Divider />
      <Content>
        <H2>
          <Translation id="rint-get-started" />
        </H2>
        <p>
          <Translation id="rint-page-dapps-get-started-subtitle" />{" "}
          <Link to="/glossary/#transaction-fee">
            <Translation id="transaction-fees" />
          </Link>
        </p>
        <Row>
          <StepBoxContainer>
            <StepBox to="/get-rnt/">
              <div>
                <H3>
                  1. <Translation id="rint-page-dapp-get-some" />
                </H3>
                <p>
                  <Translation id="rint-page-dapps-get-some-rnt-description" />
                </p>
              </div>
              <StyledButtonSecondary>
                <Translation id="rint-get-rnt" />
              </StyledButtonSecondary>
            </StepBox>
            <StepBox to="/wallets/find-wallet/">
              <div>
                <H3>
                  2. <Translation id="rint-page-dapps-set-up-a-wallet-title" />
                </H3>
                <p>
                  <Translation id="rint-page-dapps-set-up-a-wallet-description" />
                </p>
              </div>
              <StyledButtonSecondary>
                <Translation id="rint-page-dapps-set-up-a-wallet-button" />
              </StyledButtonSecondary>
            </StepBox>
            <StepBox to="#explore">
              <div>
                <H3>
                  3. <Translation id="rint-page-dapps-ready-title" />
                </H3>
                <p>
                  <Translation id="rint-page-dapps-ready-description" />
                </p>
              </div>
              <ButtonPrimary>
                <Translation id="rint-page-dapps-ready-button" />
              </ButtonPrimary>
            </StepBox>
          </StepBoxContainer>
        </Row>
      </Content>
      <FullWidthContainer ref={explore}>
        <h2 id="explore">
          <Translation id="rint-page-dapps-explore-dapps-title" />
        </h2>
        <CenterText>
          <Translation id="rint-page-dapps-explore-dapps-description" />
        </CenterText>
        <h3>
          <Translation id="rint-page-dapps-choose-category" />
        </h3>
        <OptionContainer>
          {categoryKeys.map((key, idx) => {
            const category = categories[key]
            return (
              <Option
                key={idx}
                isActive={selectedCategory === key}
                onClick={() => handleCategorySelect(key, false)}
              >
                <Emoji mr={`1rem`} text={category.emoji} />
                <OptionText>{category.title}</OptionText>
              </Option>
            )
          })}
        </OptionContainer>
        {/* Category-specific content */}
        {selectedCategory === FINANCE && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  <Translation id="rint-page-dapps-finance-title" />{" "}
                  <Emoji
                    size={"2rem"}
                    ml={"0.5rem"}
                    text=":money_with_wings:"
                  />
                </H2>
                <Subtitle>
                  <Translation id="rint-page-dapps-finance-description" />
                </Subtitle>
              </Column>
              <StyledInfoBanner isWarning={true}>
                <H2>
                  <Translation id="rint-page-dapps-warning-header" />
                </H2>
                <Translation id="rint-page-dapps-warning-message" />
              </StyledInfoBanner>
            </IntroRow>

            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category={translateMessageId(
                    "rint-page-dapps-category-exchange",
                    intl
                  )}
                  content={investments}
                />
              </LeftColumn>
            </TwoColumnContent>
          </Content>
        )}
        {selectedCategory === GAMING && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  <Translation id="rint-page-dapps-gaming-title" />{" "}
                  <Emoji size={"2rem"} ml={"0.5rem"} text=":video_game:" />
                </H2>
                <Subtitle>
                  <Translation id="rint-page-dapps-gaming-description" />
                </Subtitle>
              </Column>
              <StyledInfoBanner isWarning={true}>
                <H2>
                  <Translation id="rint-page-dapps-warning-header" />
                </H2>
                <Translation id="rint-page-dapps-warning-message" />
              </StyledInfoBanner>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category={translateMessageId(
                    "rint-page-dapps-category-casino",
                    intl
                  )}
                  content={worlds}
                />
              </LeftColumn>
            </TwoColumnContent>
          </Content>
        )}
        {selectedCategory === TECHNOLOGY && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  <Translation id="rint-page-dapps-technology-title" />{" "}
                  <Emoji size={"2rem"} ml={"0.5rem"} text=":keyboard:" />
                </H2>
                <Subtitle>
                  <Translation id="rint-page-dapps-technology-description" />
                </Subtitle>
              </Column>
              <StyledInfoBanner isWarning={true}>
                <H2>
                  <Translation id="rint-page-dapps-warning-header" />
                </H2>
                <Translation id="rint-page-dapps-warning-message" />
              </StyledInfoBanner>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category={translateMessageId(
                    "rint-page-dapps-category-technology",
                    intl
                  )}
                  content={utilities}
                />
              </LeftColumn>
            </TwoColumnContent>
          </Content>
        )}
        {selectedCategory === COLLECTIBLES && (
          <Content>
            <IntroRow>
              <Column>
                <H2>
                  <Translation id="rint-page-dapps-collectibles-title" />{" "}
                  <Emoji
                    size={"2rem"}
                    ml={"0.5rem"}
                    text=":frame_with_picture:"
                  />
                </H2>
                <Subtitle>
                  <Translation id="rint-page-dapps-collectibles-description" />
                </Subtitle>
              </Column>
              <StyledInfoBanner isWarning={true}>
                <H2>
                  <Translation id="rint-page-dapps-warning-header" />
                </H2>
                <Translation id="rint-page-dapps-warning-message" />
              </StyledInfoBanner>
            </IntroRow>
            <TwoColumnContent>
              <LeftColumn>
                <ProductList
                  category={translateMessageId(
                    "rint-page-dapps-category-foundation",
                    intl
                  )}
                  content={music}
                />
              </LeftColumn>
            </TwoColumnContent>
          </Content>
        )}
        {/* General content for all categories */}

        <MobileOptionContainer>
          <h3>
            <Translation id="rint-page-dapps-mobile-options-header" />
          </h3>
          {categoryKeys.map((key, idx) => {
            const category = categories[key]
            return (
              <Option
                key={idx}
                isActive={selectedCategory === key}
                onClick={() => handleCategorySelect(key, true)}
              >
                <Emoji mr={`1rem`} text={category.emoji} />
                <OptionText>{category.title}</OptionText>
              </Option>
            )
          })}
        </MobileOptionContainer>
      </FullWidthContainer>
      <Content>
        <ImageContainer id="rint-page-dapps-what-are-dapps">
          <StyledGhostCard>
            <MagiciansImage
              fluid={data.magicians.childImageSharp.fluid}
              alt={translateMessageId("rint-page-dapps-magician-img-alt", intl)}
            />
          </StyledGhostCard>
        </ImageContainer>
        <Box>
          <h2>
            <Translation id="rint-page-dapps-magic-behind-dapps-title" />
          </h2>
          <BoxText>
            <Translation id="rint-page-dapps-magic-behind-dapps-description" />
          </BoxText>
          <Link to="/what-is-ethereum/">
            <Translation id="rint-page-dapps-magic-behind-dapps-link" />
          </Link>
        </Box>
        <BoxGrid items={features} />
        <Row>
          <LeftColumn>
            <h2>
              <Translation id="rint-page-dapps-how-dapps-work-title" />
            </h2>
            <p>
              <Translation id="rint-page-dapps-how-dapps-work-p1" />
            </p>
            <p>
              <Translation id="rint-page-dapps-how-dapps-work-p2" />
            </p>
            <p>
              <Translation id="rint-page-dapps-how-dapps-work-p3" />
            </p>
            <StyledDocLink
              to="/developers/docs/dapps/"
              title="Intro to dapps"
            />
            <StyledDocLink
              to="/developers/docs/smart-contracts/"
              title="Smart contracts"
            />
          </LeftColumn>
          <RightColumn>
            <StyledCallout
              title={translateMessageId(
                "rint-page-dapps-learn-callout-title",
                intl
              )}
              description={translateMessageId(
                "rint-page-dapps-learn-callout-description",
                intl
              )}
              image={data.developers.childImageSharp.fixed}
              alt={translateMessageId(
                "page-dapps-learn-callout-image-alt",
                intl
              )}
            >
              <div>
                <ButtonLink to="/contributing/">
                  <Translation id="rint-page-dapps-contributing-button" />
                </ButtonLink>
              </div>
            </StyledCallout>
          </RightColumn>
        </Row>
      </Content>
    </Page>
  )
}

export default DappsPage

export const dappImage = graphql`
  fragment dappImage on File {
    childImageSharp {
      fluid(maxWidth: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const editorImage = graphql`
  fragment editorImage on File {
    childImageSharp {
      fixed(height: 80, quality: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    getdapp: file(relativePath: { eq: "get-dapp.png" }) {
      childImageSharp {
        fluid(maxWidth: 624) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "get-dapp.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
    magicians: file(relativePath: { eq: "rint-magicians.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    developers: file(relativePath: { eq: "start-building.png" }) {
      childImageSharp {
        fixed(height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    wallet: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uniswapec: file(relativePath: { eq: "dapps/uni.png" }) {
      ...editorImage
    }
    foundationec: file(relativePath: { eq: "dapps/foundation.png" }) {
      ...editorImage
    }
    darkforestec: file(relativePath: { eq: "dapps/darkforest.png" }) {
      ...editorImage
    }
    pooltogrnterec: file(relativePath: { eq: "dapps/pooltogrnter.png" }) {
      ...editorImage
    }
    aave: file(relativePath: { eq: "dapps/aave.png" }) {
      ...dappImage
    }
    compound: file(relativePath: { eq: "dapps/compound.png" }) {
      ...dappImage
    }
    pooltogrnter: file(relativePath: { eq: "dapps/pooltogrnter.png" }) {
      ...dappImage
    }
    uniswap: file(relativePath: { eq: "dapps/uni.png" }) {
      ...dappImage
    }
    dai: file(relativePath: { eq: "dapps/stabledai.png" }) {
      ...dappImage
    }
    set: file(relativePath: { eq: "dapps/set.png" }) {
      ...dappImage
    }
    tornado: file(relativePath: { eq: "dapps/tornado.png" }) {
      ...dappImage
    }
    loopring: file(relativePath: { eq: "dapps/loopring.png" }) {
      ...dappImage
    }
    polymarket: file(relativePath: { eq: "dapps/polymarket.png" }) {
      ...dappImage
    }
    sablier: file(relativePath: { eq: "dapps/sablier.png" }) {
      ...dappImage
    }
    golem: file(relativePath: { eq: "dapps/golem.png" }) {
      ...dappImage
    }
    gitcoin: file(relativePath: { eq: "dapps/gitcoin.png" }) {
      ...dappImage
    }
    ens: file(relativePath: { eq: "dapps/ens.png" }) {
      ...dappImage
    }
    radicle: file(relativePath: { eq: "dapps/radicle.png" }) {
      ...dappImage
    }
    brave: file(relativePath: { eq: "dapps/brave.png" }) {
      ...dappImage
    }
    opera: file(relativePath: { eq: "dapps/opera.png" }) {
      ...dappImage
    }
    foundation: file(relativePath: { eq: "dapps/foundation.png" }) {
      ...dappImage
    }
    superrare: file(relativePath: { eq: "dapps/superrare.png" }) {
      ...dappImage
    }
    audius: file(relativePath: { eq: "dapps/audius.png" }) {
      ...dappImage
    }
    marble: file(relativePath: { eq: "dapps/marble.png" }) {
      ...dappImage
    }
    nifty: file(relativePath: { eq: "dapps/nifty.png" }) {
      ...dappImage
    }
    opensea: file(relativePath: { eq: "dapps/opensea.png" }) {
      ...dappImage
    }
    rarible: file(relativePath: { eq: "dapps/rarible.png" }) {
      ...dappImage
    }
    decentraland: file(relativePath: { eq: "dapps/decentraland.png" }) {
      ...dappImage
    }
    cryptopunks: file(relativePath: { eq: "dapps/cryptopunks.png" }) {
      ...dappImage
    }
    darkforest: file(relativePath: { eq: "dapps/darkforest.png" }) {
      ...dappImage
    }
    axie: file(relativePath: { eq: "dapps/axie.png" }) {
      ...dappImage
    }
    gods: file(relativePath: { eq: "dapps/gods.png" }) {
      ...dappImage
    }
    cryptovoxels: file(relativePath: { eq: "dapps/cryptovoxels.png" }) {
      ...dappImage
    }
    matcha: file(relativePath: { eq: "dapps/matcha.png" }) {
      ...dappImage
    }
    oneinch: file(relativePath: { eq: "exchanges/1inch.png" }) {
      ...dappImage
    }
    dydx: file(relativePath: { eq: "exchanges/dydx.png" }) {
      ...dappImage
    }
    augur: file(relativePath: { eq: "dapps/augur.png" }) {
      ...dappImage
    }
    asyncart: file(relativePath: { eq: "dapps/asyncart.png" }) {
      ...dappImage
    }
    index: file(relativePath: { eq: "dapps/index-coop.png" }) {
      ...dappImage
    }
    nexus: file(relativePath: { eq: "dapps/nexus.png" }) {
      ...dappImage
    }
    rnterisc: file(relativePath: { eq: "dapps/rnterisc.png" }) {
      ...dappImage
    }
    zapper: file(relativePath: { eq: "dapps/zapper.png" }) {
      ...dappImage
    }
    zerion: file(relativePath: { eq: "dapps/zerion.png" }) {
      ...dappImage
    }
    rotki: file(relativePath: { eq: "dapps/rotki.png" }) {
      ...dappImage
    }
    rintexchange: file(relativePath: { eq: "dapps/rint-exchange.png" }) {
      ...dappImage
    }
    rintfoundation: file(relativePath: { eq: "dapps/rint-foundation.png" }) {
      ...dappImage
    }
    rintcasino: file(relativePath: { eq: "dapps/rint-casino.png" }) {
      ...dappImage
    }
    rintmessenger: file(relativePath: { eq: "dapps/rint-messenger.png" }) {
      ...dappImage
    }
  }
`
