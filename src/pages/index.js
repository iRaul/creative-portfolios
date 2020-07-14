/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Tilt from 'react-parallax-tilt'

import Head from './head'
import GlobalStyle from './global'
import PortfoliosList from '../components/PortfoliosList'
import PortfolioItem from '../components/PortfolioItem'
import ContributeBtn from '../components/ContributeBtn'
import Container from '../components/Container'
import SubTitle from '../components/SubTitle'
import Footer from '../components/Footer'
import Title from '../components/Title'

const blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 480, quality: 100) {
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

  return (
    <>
      <GlobalStyle />

      <Head />


      <Container>

        <Title>Helena Best Portfolio Eva</Title>
        <SubTitle>
          
          <span>dadasda</span>
        </SubTitle>

        <PortfoliosList>
          {data.allMarkdownRemark.edges.map(edge => (
            <PortfolioItem key={edge.node.id}>
              <Link to={`/${edge.node.fields.slug}`}>

                <Tilt
                  className="portfolio-item"
                  tiltMaxAngleX={2}
                  tiltMaxAngleY={2}
                  glareEnable
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                >
                  <Img
                    fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                  />
                </Tilt>
                <span className="portfolio-item__title">
                  {edge.node.frontmatter.title}
                </span>
              </Link>
            </PortfolioItem>
          ))}
        </PortfoliosList>

        <Footer />
      </Container>
    </>
  )
}

export default blog
