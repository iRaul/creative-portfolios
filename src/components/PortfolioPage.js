import styled from 'styled-components'

const PortfolioPage = styled.div`
  a {
    display: block;
    margin: 0 auto;
    padding: 10px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    text-align: center;
    width: 200px;
    margin-bottom: 50px;
  }

  video,
  img {
    border-radius: 4px;
  }

  img {
    box-shadow: none;
  }
`

export default PortfolioPage
