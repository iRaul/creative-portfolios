import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  span {
    color: rgba(255, 255, 255, 0.8);

    a {
      color: #f5576c;
      text-decoration: none;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <span>
      Made by <a href="https://twitter.com/raul_dronca">@raul_dronca</a>
    </span>
  </FooterWrapper>
)

export default Footer
