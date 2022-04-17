import styled, { keyframes } from "styled-components"
import Image from "next/image";
import Box from "../Box/Box";
import IndexTwitterGrid from './IndexTwitterGrid'
import Motion from "../Motion/Motion";

const IllustratedList = [
  {
    content: (
      <p>
        The QR code on the physical handout is a linkdrop private key that
        allows you to claim Carrot tokens into your wallet on Gnosis Chain.
      </p>
    ),
  },
  {
    content: (
      <p>
        Help achieve the goal and Carrot token holders will receive larger
        payouts.
      </p>
    ),
  },
  {
    content: (
      <p>
        At conclusion of the campaign, visit{" "}
        <a href="carrot.eth.limo" target="_blank" rel="noreferrer">
          carrot.eth.limo
        </a>{" "}
        to redeem your Carrot tokens.
      </p>
    ),
  },
];

const IndexInfo = () => {
  return (
    <StyledIndexInfo size="full" flexDirection="column">
      <Box size="medium" flexDirection="column">
        <Motion>
          <section className="primary-list">
            <ul>
              <li>
                The goal of the campaign is to bring more awareness to DXdao by
                having a set of thought leaders in the space follow DXdao’s
                twitter:{" "}
                <a href="https://twitter.com/DXdao_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  @DXdao_
                </a>
              </li>
              <li>
                As a participant, anything that you can do during the week to help
                achieve the goal will benefit all campaign carrot token holders
                together.
              </li>
            </ul>
          </section>
        </Motion>
        <Motion>
          <div className="arrow-strip">
            {[...Array(5)].map((e, i) => (
              <div 
                key={i}
                className="green-arrow"
                style={{ animationDelay: (0 + i) * 100 + "ms" }}
                >
                <Image
                  src="/DownArrowGreen.svg"
                  layout="responsive"
                  width="100vw"
                  height="100vw"
                />
              </div>
            ))}
          </div>
        </Motion>
        <Motion>
          <section className="illustrated-list">
            <h2>What do you need to know?</h2>
            <ul>
              {IllustratedList.map((listItem, i) => (
                <li key={i}>
                  <div className="graphic">
                    <Image 
                      src={`/IllustrationList/${i + 1}.svg`} 
                      width={'100vw'}
                      height={'100vw'}
                      layout="responsive"
                    />
                  </div>
                  <div className="content">
                    <div className="list-item-number">{i + 1}</div>
                    {listItem.content}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Motion>
        <Motion>
          <section className="campaign-details">
            <div className="detail-block">
              <h2>Total Potential<br/> Campaign Payout</h2>
              <p>
                Up to 50,000 wxDai
              </p>
            </div>
            <div className="detail-block">
              <h2>Carrot token objective</h2>
              <p>
                How many of the targeted 50 Twitter accounts in the DXdao
                Awareness Mining Activation will be following @DXdao_ by the end
                of April 25, 2022?
              </p>
            </div>
          </section>
        </Motion>
      </Box>
      <Motion>
        <IndexTwitterGrid />
      </Motion>
      <Motion>
        <Box size="medium" flexDirection="column" className="lower-details">
          <div className="detail-block">
            <h2>Details</h2>
            <p>
              This campaign will pay out in the range of 1 to 50 follows, with no payout when the result is below 1 follow and increasing linear payout over the range with a full collateral payout when the result is 50 follows.
            </p>
          </div>
          <div className="detail-block">
            <h2>Don’t have Carrot tokens and want to buy some?</h2>
            <p>
            Check out the Carrot token -&gt; wXDAI pool on Swapr.eth.limo: <br/>xDXDAOTWIT50-0425 -&gt; wxDAI pool
            </p>
          </div>
        </Box>
      </Motion>
    </StyledIndexInfo>
  );
};

const arrowAnimationOpacity = keyframes`
  0% {opacity: 1}
  50% {opacity: 0}
  100% {opacity: 1}
`;

const arrowAnimationMovement = keyframes`
  0% {transform: translateY(-16px)}
  50% {transform: translateY(16px)}
  100% {transform: translateY(-16px)}
`;

const StyledIndexInfo = styled(Box)`
  .primary-list {
    margin: 0 auto;
    width: 680px;
    ul {
      margin-bottom: 100px;
      li {
        font-size: 32px;
        font-weight: 100;
        color: ${(props) => props.theme.colors.gray600};
        margin-bottom: 40px;
        line-height: 44px;
        position: relative;
        letter-spacing: 1px;
        &:before {
          position: absolute;
          content: "";
          width: 16px;
          height: 16px;
          border-radius: 16px;
          top: 12px;
          left: -40px;
          border: 1px solid ${(props) => props.theme.colors.orange};
        }
        &:last-child {
          margin-bottom: 0;
        }
        a {
          font-weight: inherit;
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
  .arrow-strip {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    .green-arrow {
      width: 32px;
      height: 32px;
      margin: 0 12px;
      animation: ${arrowAnimationMovement} 2s infinite forwards;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .illustrated-list {
    margin-bottom: 100px;
    h2 {
      text-align: center;
      color: ${(props) => props.theme.colors.orange};
      margin-bottom: 80px;
      font-size: 52px;
      font-weight: 200;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${(props) => props.theme.colors.orange};
        height: 311px;
        .graphic {
          min-width: 240px;
          min-height: 240px
        }
        .content {
          padding: 0 0 0 40px;
          .list-item-number {
            margin-bottom: 32px;
            width: 42px;
            height: 42px;
            border-radius: 42px 42px 42px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          p {
            font-size: 26px;
            line-height: 36px;
            font-weight: 100;
            color: ${(props) => props.theme.colors.gray600};
            a {
              color: ${(props) => props.theme.colors.green};
            }
          }
        }
        &:first-child {
          border-color: ${(props) => props.theme.colors.orange};
          .list-item-number {
            background: ${(props) => props.theme.colors.orange};
          }
        }
        &:nth-child(2) {
          border-color: ${(props) => props.theme.colors.lavender};
          .list-item-number {
            background: ${(props) => props.theme.colors.lavender};
          }
        }
        &:nth-child(3) {
          border-color: ${(props) => props.theme.colors.yellow};
          .list-item-number {
            background: ${(props) => props.theme.colors.yellow};
          }
        }
        &:nth-child(even) {
          flex-direction: row-reverse;
          .content {
            padding: 0 40px 0 0;
            text-align: right;
            .list-item-number {
              margin-left: auto;
            }
          }
        }
      }
    }
  }
  .campaign-details,
  .lower-details {
    max-width: 672px;
    margin-bottom: 112px;
    .detail-block {
      text-align: center;
      margin-bottom: 56px;
      &:last-child {
        margin-bottom: 0;
      }
      h2 {
        font-size: 37px;
        color: ${(props) => props.theme.colors.orange};
        font-weight: 200;
        line-height: 55.5px;
        letter-spacing: 6px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 12px;
      }
      p {
        font-size: 32px;
        line-height: 48px;
        color: ${(props) => props.theme.colors.gray600};
        font-weight: 100;
      }
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoints.l}) {
    .primary-list {
      padding-left: 60px;
      width: unset;
      ul {
        margin-left: auto;
        margin-right: auto;
        li {
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 0px;
        }
      }
    }
    .arrow-strip {
      margin-bottom: 40px;
      .green-arrow {
        margin: 0 9px;
        width: 18px;
      }
    }
    .campaign-details,
    .lower-details {
      margin-left: auto;
      margin-right: auto;
      .detail-block {
        h2 {
          font-size: 20px;
          line-height: 30px;
        }
        p {
          font-size: 20px;
          line-height: 30px;
        }
      }
    }
    .illustrated-list {
      margin: 0 auto 60px;
      h2 {
        font-size: 32px;
        line-height: 38.4px;
        margin-bottom: 40px;
        padding: 0 15%;
      }
      ul {
        li {
          flex-direction: column !important;
          height: unset;
          padding-bottom: 48px;
          padding-top: 0px;
          margin-top: -10px;
          &:first-child {
            padding-top: 20px;
          }
          .graphic {
            margin-left: auto;
            transform: scale(0.75);
            transform-origin: bottom right;
          }
          .content {
            margin-top: -40px;
            padding: 0 !important;
            .list-item-number {
              margin-right: auto;
              margin-left: 0 !important;
            }
            p {
              font-size: 18px;
              line-height: 25.5px;
              text-align: left;
            }
          }
        }
      }
    }
  }
`;

export default IndexInfo;
