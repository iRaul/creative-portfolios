/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './index.css'

import PortfoliosList from '../components/PortfoliosList'
import Portfolio from '../components/PortfolioItem'
import Container from '../components/Container'
import PortfolioItem from '../components/PortfolioItem'

const blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 140) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.map(item => console.log(item))

  return (
    <Container>
      <h1>Creative Portfolios</h1>

      <PortfoliosList>
        {data.allMarkdownRemark.edges.map(edge => (
          <PortfolioItem>
            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
            <Link to={`/${edge.node.fields.slug}`} key={edge.node.id}>
              {edge.node.frontmatter.title}
            </Link>
          </PortfolioItem>
        ))}
      </PortfoliosList>
    </Container>
  )
}

export default blog
