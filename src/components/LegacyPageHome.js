import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { translateMessageId } from "../utils/translations"
import Morpher from "./Morpher"
import PageMetadata from "./PageMetadata"
import Translation from "./Translation"
import Link from "./Link"
import { Divider } from "./SharedStyledComponents"

const Hero = styled(Img)`
  width: 100%;
  min-height: 380px;
  max-height: 500px;
  background-size: cover;
  background: no-repeat 50px;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`

const Content = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
`

const H1 = styled.h1`
  line-height: 1.4;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 1.5rem 0;

  max-width: 80%;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    max-width: 100%;
  }
`

const Description = styled.p`
  color: ${(props) => props.theme.colors.text200};
  max-width: 55ch;
`

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-wrap: wrap;
  }
`

const Section = styled.div`
  flex: 1 1 300px;
  margin-bottom: 2rem;
  margin-right: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-right: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-right: 0;
  }

  & > h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  & > p {
    color: ${(props) => props.theme.colors.text200};
    max-width: 400px;
  }
`

const H3 = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`

const LegacyPageHome = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "home/hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      individuals: file(relativePath: { eq: "doge-computer.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      developers: file(relativePath: { eq: "developers-rnt-blocks.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      enterprise: file(relativePath: { eq: "enterprise-rnt.png" }) {
        childImageSharp {
          fixed(height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const sections = [
    {
      img: {
        src: data.individuals,
        alt: "rint-page-index-sections-individuals-image-alt",
      },
      title: "rint-page-index-sections-individuals-title",
      desc: "rint-page-index-sections-individuals-desc",
      link: {
        text: "rint-page-index-sections-individuals-link-text",
        to: "/what-is-rint/",
      },
    },
    {
      img: {
        src: data.developers,
        alt: "rint-page-index-sections-developers-image-alt",
      },
      title: "rint-page-index-sections-developers-title",
      desc: "rint-page-index-sections-developers-desc",
      link: {
        text: "rint-page-index-sections-developers-link-text",
        to: "/developers/",
      },
    },
    {
      img: {
        src: data.enterprise,
        alt: "rint-page-index-sections-enterprise-image-alt",
      },
      title: "rint-page-index-sections-enterprise-title",
      desc: "rint-page-index-sections-enterprise-desc",
      link: {
        text: "rint-page-index-sections-enterprise-link-text",
        to: "/enterprise/",
      },
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("rint-page-index-meta-title", intl)}
        description={translateMessageId(
          "rint-page-index-meta-description",
          intl
        )}
      />
      <Hero
        fluid={data.hero.childImageSharp.fluid}
        alt={translateMessageId("rint-page-index-hero-image-alt", intl)}
        loading="eager"
      />
      <Content>
        <Header>
          <Title>
            <H1>
              <Translation id="rint-page-index-title" />
            </H1>
            <H3>
              <Morpher />
            </H3>
          </Title>
          <Description>
            <Translation id="rint-page-index-subtitle" />
          </Description>
        </Header>
        <Divider />
        <SectionContainer>
          {sections.map((section, idx) => (
            <Section key={idx}>
              <h2>
                <Translation id={section.title} />
              </h2>
              <p>
                <Translation id={section.desc} />
              </p>
              <Link to={section.link.to}>
                <Translation id={section.link.text} />
              </Link>
            </Section>
          ))}
        </SectionContainer>
      </Content>
    </Page>
  )
}

export default LegacyPageHome
