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

  &:hover {
    &:before {
      opacity: 1;
      visibility: visible;
    }
  }

  &:before {
    content: 'Contribute';
    position: absolute;
    left: -115px;
    background-color: #fff;
    padding: 8px 12px;
    border-radius: 4px;
    color: #333;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
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
