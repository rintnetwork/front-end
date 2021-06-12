import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { StaticQuery, graphql } from "gatsby"

import { getLocaleTimestamp } from "../utils/time"
import Translation from "./Translation"
import Link from "./Link"
import Icon from "./Icon"

const StyledFooter = styled.footer`
  padding-top: 3rem;
  padding-bottom: 4rem;
  padding: 1rem 2rem;
`

const FooterTop = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const LastUpdated = styled.div`
  color: ${(props) => props.theme.colors.text200};
`

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 1rem;
  justify-content: space-between;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`

const LinkSection = styled.div``

const SectionHeader = styled.h3`
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 1.14em 0;
  font-weight: bold;
`

const List = styled.ul`
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 400;
  margin: 0;
  list-style-type: none;
  list-style-image: none;
`

const ListItem = styled.li`
  margin-bottom: 1rem;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text200};
  svg {
    fill: ${(props) => props.theme.colors.text200};
  }
  &:after {
    color: ${(props) => props.theme.colors.text200};
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    &:after {
      color: ${(props) => props.theme.colors.primary};
    }
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`

const SocialIcons = styled.div`
  margin: 1rem 0;
`
const SocialIcon = styled(Icon)`
  margin-left: 1rem;
  width: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`

const socialLinks = [
  {
    icon: "github",
    to: "https://github.com/rintnetwork/front-end",
    ariaLabel: "GitHub",
  },
  {
    icon: "twitter",
    to: "https://twitter.com/rintnetwork",
    ariaLabel: "Twitter",
  },
  {
    icon: "youtube",
    to: "https://www.youtube.com/channel/UCO3FjN1KYNPd5SWchyCIigw",
    ariaLabel: "Youtube",
  },
  {
    icon: "discord",
    to: "https://discord.gg/mXRK2GbqVX",
    ariaLabel: "Discord",
  },
]

const Footer = () => {
  const intl = useIntl()

  const linkSections = [
    {
      title: "use-rint",
      links: [
        {
          to: `/wallets/`,
          text: "rint-wallets",
        },
        {
          to: `/get-rnt/`,
          text: "get-rnt",
        },
        {
          to: `/dapps/`,
          text: "decentralized-applications-dapps",
        },
        {
          to: `/rnt/staking/`,
          text: "page-stake-rnt",
        },
      ],
    },
    {
      title: "learn",
      links: [
        {
          to: `/what-is-rint/`,
          text: "what-is-rint",
        },
        {
          to: `/rnt/`,
          text: "what-is-rnt",
        },
        {
          to: `/learn/`,
          text: "guides-and-resources",
        },
        {
          to: "/history/",
          text: "history-of-rint",
        },
        {
          to: "/whitepaper/",
          text: "rint-whitepaper",
        },
        {
          to: "/rips/",
          text: "rips",
        },
      ],
    },
    {
      title: "rint-network",
      links: [
        {
          to: `/`,
          text: "rint-messenger",
          isPartiallyActive: false,
        },
        {
          to: `/`,
          text: "rint-exchange",
        },
      ],
    },
    {
      title: "ecosystem",
      links: [
        {
          to: `/community/`,
          text: "rint-community",
        },
        {
          to: "https://eitny.foundation",
          text: "eitny-foundation",
        },
        {
          to: "https://blog.eitny.foundation/",
          text: "eitny-foundation-blog",
        },
      ],
    },
    {
      title: "enterprise",
      links: [
        {
          to: "/enterprise/",
          text: "mainnet-rint",
        },
        {
          to: "/enterprise/private-rint/",
          text: "private-rint",
        },
      ],
    },
    {
      title: "about-rint-network",
      links: [
        {
          to: "/about/",
          text: "about-us",
        },
        {
          to: "/about/#open-jobs",
          text: "jobs",
        },
        {
          to: "/en/contributing/",
          text: "contributing",
        },
        {
          to: "/languages/",
          text: "language-support",
        },
        {
          to: "/en/privacy-policy/",
          text: "privacy-policy",
        },
        {
          to: "/en/terms-of-use/",
          text: "terms-of-use",
        },
        {
          to: "/en/cookie-policy/",
          text: "cookie-policy",
        },
        {
          to: "mailto:press@rint.network",
          text: "contact",
        },
      ],
    },
  ]

  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          allSiteBuildMetadata {
            edges {
              node {
                buildTime
              }
            }
          }
        }
      `}
      render={(data) => (
        <StyledFooter>
          <FooterTop>
            <LastUpdated>
              <Translation id="website-last-updated" />:{" "}
              {getLocaleTimestamp(
                intl.locale,
                data.allSiteBuildMetadata.edges[0].node.buildTime
              )}
            </LastUpdated>
            <SocialIcons>
              {socialLinks.map((link, idx) => {
                return (
                  <Link
                    to={link.to}
                    hideArrow={true}
                    key={idx}
                    ariaLabel={link.ariaLabel}
                  >
                    <SocialIcon name={link.icon} size="36" />
                  </Link>
                )
              })}
            </SocialIcons>
          </FooterTop>
          <LinkGrid>
            {linkSections.map((section, idx) => (
              <LinkSection key={idx}>
                <SectionHeader>
                  <Translation id={section.title} />
                </SectionHeader>
                <List>
                  {section.links.map((link, linkIdx) => (
                    <ListItem key={linkIdx}>
                      <FooterLink to={link.to} isPartiallyActive={false}>
                        <Translation id={link.text} />
                      </FooterLink>
                    </ListItem>
                  ))}
                </List>
              </LinkSection>
            ))}
          </LinkGrid>
        </StyledFooter>
      )}
    />
  )
}

export default Footer
