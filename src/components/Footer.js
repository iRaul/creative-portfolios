import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  span {
    color: rgba(255, 255, 255, 0.6);

    a {
      color: #f5576c;
      text-decoration: none;
    }
  }
`

const Footer = () => (
  <FooterWrapper>
    <span>All screenshots © of their respective owners.</span>
    <span>
      Built by <a href="https://twitter.com/raul_dronca">@raul_dronca</a>
    </span>
  </FooterWrapper>
)

export default Footer
