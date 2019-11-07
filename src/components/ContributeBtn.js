import React from 'react'
import styled from 'styled-components'

const ContributeBtnStyle = styled.a`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  cursor: pointer;
`

const ContributeBtn = ({ href }) => (
  <ContributeBtnStyle href={href}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  </ContributeBtnStyle>
)

export default ContributeBtn
