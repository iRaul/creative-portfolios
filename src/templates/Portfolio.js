import React from 'react'
import { Link, graphql } from 'gatsby'

import GlobalStyle from '../pages/global'
import PortfolioName from '../components/PortfolioName'
import PortfolioPage from '../components/PortfolioPage'
import Container from '../components/Container'
import BackBtn from '../components/BackBtn'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
const Portfolio = ({ data }) => (
  <>
    <GlobalStyle />
    <Container>
      <Link to="/">
        <BackBtn />
      </Link>

      <PortfolioName>{data.markdownRemark.frontmatter.title}</PortfolioName>

      <PortfolioPage>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </PortfolioPage>
    </Container>
  </>
)

export default Portfolio
