import React, { useState, useEffect } from "react"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo"
import { ThemeProvider } from "styled-components"
import { IntlProvider, IntlContextProvider } from "gatsby-plugin-intl"
import styled from "styled-components"

import "../styles/layout.css"
import { lightTheme, darkTheme, GlobalStyle } from "../theme"

import Footer from "./Footer"
import Nav from "./Nav"
import SideNav from "./SideNav"
import SideNavMobile from "./SideNavMobile"
import TranslationBanner from "./TranslationBanner"

import { isLangRightToLeft } from "../utils/translations"

const ContentContainer = styled.div`
  position: relative;
  margin: 0px auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: ${(props) => props.theme.variables.maxPageWidth};
  }
`

const MainContainer = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  overflow: visible;
  width: 100%;
  flex-grow: 1;
`

const Layout = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [shouldShowSideNav, setShouldShowSideNav] = useState(false)
  // set isDarkTheme based on browser/app user preferences
  useEffect(() => {
    if (localStorage && localStorage.getItem("dark-theme") !== null) {
      setIsDarkTheme(localStorage.getItem("dark-theme") === "true")
    } else {
      setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
  }, [])

  useEffect(() => {
    setShouldShowSideNav(props.path.includes("/docs/"))
  }, [props.path])

  const handlrntemeChange = () => {
    setIsDarkTheme(!isDarkTheme)
    if (localStorage) {
      localStorage.setItem("dark-theme", !isDarkTheme)
    }
  }

  // IntlProvider & IntlContextProvider appear to be necessary in order to pass context
  // into components that live outside page components (e.g. Nav & Footer).
  // https://github.com/wiziple/gatsby-plugin-intl/issues/116
  const intl = props.pageContext.intl
  const theme = isDarkTheme ? darkTheme : lightTheme

  const isPageLanguageEnglish = intl.language === intl.defaultLanguage
  const isPageContentEnglish = !!props.pageContext.isContentEnglish
  const isPageTranslationOutdated = !!props.pageContext.isOutdated
  const isPageRightToLeft = isLangRightToLeft(intl.language)

  const shouldShowTranslationBanner =
    isPageTranslationOutdated ||
    (isPageContentEnglish && !isPageLanguageEnglish)

  const path = props.path

  return (
    <ApolloProvider client={client}>
      <IntlProvider
        locale={intl.language}
        defaultLocale={intl.defaultLanguage}
        messages={intl.messages}
      >
        <IntlContextProvider value={intl}>
          <ThemeProvider theme={theme}>
            <GlobalStyle isDarkTheme={isDarkTheme} />
            <TranslationBanner
              shouldShow={shouldShowTranslationBanner}
              isPageContentEnglish={isPageContentEnglish}
              isPageRightToLeft={isPageRightToLeft}
              originalPagePath={intl.originalPath}
            />
            <ContentContainer>
              <Nav
                handlrntemeChange={handlrntemeChange}
                isDarkTheme={isDarkTheme}
                path={path}
              />
              {shouldShowSideNav && <SideNavMobile path={path} />}
              <MainContainer>
                {shouldShowSideNav && <SideNav path={path} />}
                <MainContent>
                  <Main>{props.children}</Main>
                </MainContent>
              </MainContainer>
              <Footer />
            </ContentContainer>
          </ThemeProvider>
        </IntlContextProvider>
      </IntlProvider>
    </ApolloProvider>
  )
}

export default Layout
