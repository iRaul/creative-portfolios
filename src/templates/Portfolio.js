import React from 'react'
import { graphql } from 'gatsby'

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
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
  </Container>
)

export default Portfolio
