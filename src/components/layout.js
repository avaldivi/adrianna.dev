/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import { sidebarContent } from "./Layout/sidebarData"
import Header from "./header"
import "./layout.css"
import {
  StyledLayout,
  TopNavigation,
  MainContent,
  Sidebar,
  Footer,
  SidebarWrapper,
} from "./Layout/layout.style"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <StyledLayout>
          <TopNavigation>
            <Header siteTitle={data.site.siteMetadata.title} />
          </TopNavigation>
          <MainContent>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
            </div>
          </MainContent>
          <Sidebar>
            <SidebarWrapper>
              <div>{sidebarContent.current_role}</div>
              <div>{"Currently: " + sidebarContent.current_workplace}</div>
            </SidebarWrapper>
          </Sidebar>
          <Footer>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </Footer>
        </StyledLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
