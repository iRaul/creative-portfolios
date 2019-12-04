import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

const Copyright = styled.span`
  color: rgba(255, 255, 255, 0.6);
`

const Footer = () => (
  <FooterWrapper>
    <Copyright>All screenshots © of their respective owners.</Copyright>
  </FooterWrapper>
)

export default Footer
