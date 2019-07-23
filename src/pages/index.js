/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm {data.site.siteMetadata.author}</h2>
      <Link to="/blog">Writing ✍</Link>
    </Layout>
  )
}

export default index
