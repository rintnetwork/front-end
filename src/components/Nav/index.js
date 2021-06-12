import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import styled from "styled-components"
import { cloneDeep } from "lodash"

import NavDropdown from "./Dropdown"
import MobileNavMenu from "./Mobile"
import NakedButton from "../NakedButton"
import Link from "../Link"
import Icon from "../Icon"
import Search from "../Search"
import Translation from "../Translation"
import { NavLink } from "../SharedStyledComponents"
import { translateMessageId } from "../../utils/translations"

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`

const StyledNav = styled.nav`
  height: ${(props) => props.theme.variables.navHeight};
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* TODO use theme variable */
`

const SubNav = styled.nav`
  padding: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  background: ${(props) => props.theme.colors.ednBackground};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  /* TODO sort out mobile */
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`

const NavContent = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    align-items: center;
    justify-content: space-between;
  }
`

const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: none;
  }
`

const LeftItems = styled.ul`
  margin: 0;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  list-style-type: none;
  list-style-image: none;
`

const RightItems = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavListItem = styled.li`
  white-space: nowrap;
  margin: 0;
`

const RightNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 0;
  margin-left: 1rem;

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`

const HomeLogoNavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

const HomeLogo = styled(Img)`
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`

const Span = styled.span`
  padding-left: 0.5rem;
`

const ThemeToggle = styled(NakedButton)`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`

const NavIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text};
`

// TODO display page title on mobile
const Nav = ({ handlrntemeChange, isDarkTheme, path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rnt-home-icon.png" }) {
        childImageSharp {
          fixed(width: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const intl = useIntl()

  const linkSections = [
    {
      text: "use-rint",
      ariaLabel: "use-rint-menu",
      items: [
        {
          text: "rint-wallets",
          to: "/wallets/",
        },
        {
          text: "get-rnt",
          to: "/get-rnt/",
        },
        {
          text: "decentralized-applications-dapps",
          to: "/dapps/",
        },
        {
          text: "page-stake-rnt",
          to: "/rnt/staking/",
        },
      ],
    },
    {
      text: "learn",
      ariaLabel: "learn-menu",
      items: [
        {
          text: "what-is-rint",
          to: "/what-is-rint/",
        },
        {
          text: "what-is-rnt",
          to: "/rnt/",
        },
        {
          text: "history-of-rint",
          to: "/history/",
        },
        {
          text: "rint-whitepaper",
          to: "/whitepaper/",
        },
        {
          text: "rips",
          to: "/rips/",
        },
        {
          text: "guides-and-resources",
          to: "/learn/",
        },
      ],
    },
    {
      text: "enterprise",
      ariaLabel: "enterprise-menu",
      items: [
        {
          text: "mainnet-rint",
          to: "/enterprise/",
        },
        {
          text: "private-rint",
          to: "/enterprise/private-rint/",
        },
      ],
    },
    {
      text: "community",
      ariaLabel: "community-menu",
      items: [
        {
          text: "rint-community",
          to: "/community/",
        },
        {
          text: "grants",
          to: "/community/grants/",
        },
      ],
    },
  ]
  const ednLinks = [
    {
      text: "home",
      to: "/developers/",
      isPartiallyActive: false,
    },
    {
      text: "docs",
      to: "/developers/docs/",
    },
    {
      text: "tutorials",
      to: "/developers/tutorials/",
    },
    {
      text: "learn-by-coding",
      to: "/developers/learning-tools/",
    },
    {
      text: "set-up-local-env",
      to: "/developers/local-environment/",
    },
  ]

  let mobileLinkSections = cloneDeep(linkSections)
  const handleMenuToggle = (item) => {
    if (item === "menu") {
      setIsMenuOpen(!isMenuOpen)
    } else if (item === "search") {
      setIsSearchOpen(!isSearchOpen)
    } else {
      setIsMenuOpen(false)
      setIsSearchOpen(false)
    }
  }

  const shouldShowSubNav = path.includes("/developers/")

  return (
    <NavContainer>
      <StyledNav>
        <NavContent>
          <HomeLogoNavLink to="/">
            <HomeLogo
              fixed={data.file.childImageSharp.fixed}
              alt={translateMessageId("rint-logo", intl)}
            />
          </HomeLogoNavLink>
          {/* Desktop */}
          <InnerContent>
            <LeftItems>
              {linkSections.map((section, idx) =>
                section.items || section.component ? (
                  <NavDropdown
                    section={section}
                    key={idx}
                    hasSubNav={shouldShowSubNav}
                  />
                ) : (
                  <NavListItem key={idx}>
                    <NavLink
                      to={section.to}
                      isPartiallyActive={section.isPartiallyActive}
                    >
                      <Translation id={section.text} />
                    </NavLink>
                  </NavListItem>
                )
              )}
            </LeftItems>
            <RightItems>
              <Search />
              <ThemeToggle onClick={handlrntemeChange}>
                <NavIcon name={isDarkTheme ? "darkTheme" : "lightTheme"} />
              </ThemeToggle>
              <RightNavLink to="/languages/">
                <NavIcon name="language" />
                <Span>
                  <Translation id="languages" />
                </Span>
              </RightNavLink>
            </RightItems>
          </InnerContent>
          {/* Mobile */}
          <MobileNavMenu
            isMenuOpen={isMenuOpen}
            isSearchOpen={isSearchOpen}
            isDarkTheme={isDarkTheme}
            toggleMenu={handleMenuToggle}
            togglrnteme={handlrntemeChange}
            linkSections={mobileLinkSections}
          />
        </NavContent>
      </StyledNav>
      {shouldShowSubNav && (
        <SubNav>
          {ednLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              isPartiallyActive={link.isPartiallyActive}
            >
              <Translation id={link.text} />
            </NavLink>
          ))}
        </SubNav>
      )}
    </NavContainer>
  )
}

export default Nav
