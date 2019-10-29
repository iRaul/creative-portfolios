import styled from 'styled-components'

const PortfoliosList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;

  a {
    text-decoration: none;

    .portfolio-item__title {
      display: block;
      font-size: 22px;
      font-weight: 400;
      border-radius: 4px;
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`

export default PortfoliosList
