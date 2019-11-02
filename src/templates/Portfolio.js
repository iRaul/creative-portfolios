import React from 'react'
import { Link, graphql } from 'gatsby'

import PortfolioName from '../components/PortfolioName'
import PortfolioPage from '../components/PortfolioPage'
import Container from '../components/Container'

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
  <Container>
    <Link className="back-btn" to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back
    </Link>

    <PortfolioName>{data.markdownRemark.frontmatter.title}</PortfolioName>

    <PortfolioPage>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </PortfolioPage>
  </Container>
)

export default Portfolio
