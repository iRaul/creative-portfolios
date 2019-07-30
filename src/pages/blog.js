/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
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

  data.allMarkdownRemark.edges.map(edge =>
    console.log(edge.node.frontmatter.image.childImageSharp.fluid)
  )

  return (
    <Layout>
      <Link to="/">🏠</Link>
      <h1>Writings</h1>

      {data.allMarkdownRemark.edges.map(edge => (
        <div>
          <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} />
          <h2 key={edge.node.id}>{edge.node.frontmatter.title}</h2>
        </div>
      ))}
    </Layout>
  )
}

export default blog
