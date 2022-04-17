import styled from "styled-components";
import Image from "next/image";
import Box from "../Box/Box";
import Motion from "../Motion/Motion";

const IndexTopStrip = () => {
  return (
    <Motion>
      <StyledIndexTopStrip size="large">
        <div className="warning-logo">
          <Image 
            src="/CarrotWarningLogo.svg"
            layout="responsive"
            width={'100vw'}
            height={'100vw'}
          />
        </div>
        <p>
          If you have received this information, you are now a participant in the <strong>DXdao Twitter Awareness Activation campaign</strong> during ETH Week in Amsterdam.  
        </p>
      </StyledIndexTopStrip>
    </Motion>
  )
};

const StyledIndexTopStrip = styled(Box)`
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  padding: 32px 0;
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(268.79deg, #FFFFFF 0.58%, rgba(255, 255, 255, 0) 17.71%), linear-gradient(91.09deg, #FFFFFF 0.55%, rgba(255, 255, 255, 0) 26.1%), radial-gradient(78.33% 78.33% at 50% 141.67%, rgba(255, 120, 45, 0.2) 7.77%, rgba(255, 120, 45, 0) 100%);
  }
  &:before {
    top: -60px;
  }
  &:after {
    bottom: -60px;
    transform: rotate(180deg);
  }
  .warning-logo {
    width: 220px;
    height: 220px;
  }

  p {
    font-size: 32px;
    color: ${props => props.theme.colors.gray600};
    font-weight: 100;
    line-height: 44px;
    padding-left: 24px;
    max-width: 890px;
    letter-spacing: 1px;
    strong {
      color: ${props => props.theme.colors.gray900};
      font-weight: 100;
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    padding: 32px 0 40px;
    &&& {
      max-width: 360px !important;
    }
    .warning-logo {
        margin-bottom: 32px;
        width: 184px;
        height: 184px;
        margin-top: 24px;
    }
    p {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

export default IndexTopStrip;