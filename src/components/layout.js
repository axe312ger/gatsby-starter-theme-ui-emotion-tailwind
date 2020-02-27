/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { useThemeUI } from "theme-ui"

import styled from "@emotion/styled"
import tw from "twin.macro"

import Header from "./header"
import "./layout.css"

const Wrapper = tw.div`mx-auto max-w-xl px-4 pb-6`

const StyledTestComponent = styled.div`
  ${tw`m-5 p-4 border text-red-400 mb-0 font-foo`}

  outline: 3px dashed blue;
`

const ThemeDocsWrapper = tw.div`my-4 p-4`
const ThemeDocs = tw.pre`p-2 font-mono bg-gray-200`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const context = useThemeUI()
  const { theme } = context

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <Wrapper>
        <StyledTestComponent>
          This component has css via Tailwind CSS and Emotion applied.
        </StyledTestComponent>
        <ThemeDocsWrapper>
          <h1>Active Theme UI config:</h1>
          <ThemeDocs>{JSON.stringify(theme, null, 2)}</ThemeDocs>
        </ThemeDocsWrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
