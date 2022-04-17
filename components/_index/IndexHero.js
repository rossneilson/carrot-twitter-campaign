import styled from "styled-components";
import Box from "../Box/Box";
import Motion from "../Motion/Motion";

const IndexHero = () => {
  return (
    <StyledIndexHero>
      <Box size="large" flexDirection="column" dataAos={'fade-up'}>
        <Motion initialPositionY={100}>
          <h1>DXdao Twitter<br/> Awareness Activation<br/> Using <bold>Carrot.eth</bold> </h1>
          <p>
            During ETH Week<br className="show-mobile"/> in Amsterdam
          </p>
          <p>
            April 18-25, 2022
          </p>
        </Motion>
      </Box>
    </StyledIndexHero>
  );
};

const StyledIndexHero = styled.section`
  padding-bottom: 162px;
  h1 {
    font-size: 80px;
    font-height: 80px;
    font-weight: 100;
    margin-bottom: 32px;
    span {
      
    }
  }
  p {
    color: ${props => props.theme.colors.orange};
    line-height: 31.5px;
    font-size: 21px;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 200;
  }
  .show-mobile {
    display: none;
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.l}) {
    .show-mobile {
      display: block;
    }
    padding-bottom: 80px;
    h1 {
      font-size: 40px;
      line-height: 44px;
      margin-top: 40px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default IndexHero;
