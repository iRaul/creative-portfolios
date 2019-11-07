import React from 'react'
import styled from 'styled-components'

const BackBtnStyle = styled.span`
  width: 100px;
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;

  &:hover svg {
    transform: translateX(-5px);
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const BackBtn = () => (
  <BackBtnStyle>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    Back
  </BackBtnStyle>
)

export default BackBtn
