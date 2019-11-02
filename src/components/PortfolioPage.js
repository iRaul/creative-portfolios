import styled from 'styled-components'

const PortfolioPage = styled.div`
  a {
    display: block;
    margin: 0 auto;
    padding: 10px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    border-radius: 4px;
    text-align: center;
    width: 170px;
    margin-bottom: 50px;
    transition: all 0.15s ease;

    @media (max-width: 768px) {
      width: 140px;
      padding: 8px;
    }

    &:hover {
      box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
        0 3px 6px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }
  }

  video,
  img {
    border-radius: 4px;
  }
`

export default PortfolioPage
