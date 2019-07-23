/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            id
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Link to="/">🏠</Link>
      <h1>Writings</h1>

      {data.allMarkdownRemark.edges.map(edge => (
        <h2 key={edge.node.id}>{edge.node.frontmatter.title}</h2>
      ))}
    </Layout>
  )
}

export default blog
