import styled from 'styled-components'

const PortfoliosList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px 25px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;

    &:hover {
      .portfolio-item__title:before {
        transform: scale(1);
      }
    }

    .portfolio-item__title {
      display: block;
      font-size: 22px;
      font-weight: 400;
      border-radius: 4px;
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.9);
      position: relative;

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: absolute;
        bottom: 8px;
        right: 0;
        background-color: rgba(255, 255, 255, 0.8);
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    }
  }
`

export default PortfoliosList
