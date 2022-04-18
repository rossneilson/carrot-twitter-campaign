import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Box from "./../Box/Box";
import Leaders from "./../../data/twitter_leaders.json";

const IndexTwitterGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://dxdaobot.pythonanywhere.com/")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <StyledTwitterGrid size="full">
      <ul>
        {Leaders.users.map(({ handle, id }, i) => (
          <li key={handle}>
            <a
              href={`https://twitter.com/${handle}`}
              target="_blank"
              rel="noreferrer"
            >
              {i + 1}_ @{handle}
            </a>
            {loading ? (
              <Spinner
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
              </Spinner>
            ) : data.find((account) => account.id === id)?.follows ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 11 12 14 20 6" />
                <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </StyledTwitterGrid>
  );
};

const listElementHeight = "66px";
const listElementLineHeight = "40px";

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.svg`
  animation: ${SpinAnimation} 1s cubic-bezier(0.42, 0.8, 0.6, 0.83) infinite;
  width: fit-content;
  margin: 0 auto;
`;

const StyledTwitterGrid = styled(Box)`
  margin-bottom: 125px !important;
  ul {
    max-width: 1136px;
    margin: 0 auto;
    display: block;
    height: calc(${listElementHeight} * 10);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: calc(100% / 5);
      height: ${listElementHeight};
      display: flex;
      align-items: center;
      padding-left: 22px;
      border-top: 1px solid ${(props) => props.theme.colors.orange};
      font-size: 13px;
      position: relative;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: inherit;
        color: ${(props) => props.theme.colors.black};
        transition: 0.15s ease-in-out all;
        font-weight: 600;
        letter-spacing: 2.5px;
        &:hover {
          color: ${(props) => props.theme.colors.orange};
        }
      }
      &:after,
      &:before {
        position: absolute;
        content: "";
        background: ${(props) => props.theme.colors.orange};
        width: 1px;
        height: 40px;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
        top: calc((${listElementHeight} / 2) - (${listElementLineHeight} / 2));
        display: none;
      }
      &:nth-child(-n + 10) {
        &:before {
          display: none;
        }
      }
      &:nth-child(10n) {
        border-bottom: 1px solid ${(props) => props.theme.colors.orange};
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 80px !important;
    ul {
      height: unset !important;
      max-width: 572px !important;
      li {
        border-bottom: 0 !important;
        width: 100%;
        padding-left: 80px;
        height: 40px;
        border-color: ${(props) => props.theme.colors.orange_op6} !important;
        a {
          color: ${(props) => props.theme.colors.black};
          font-size: 13px;
        }
        &:first-child {
          border-top: 0;
        }
        &:last-child {
          border-bottom: 1px solid ${(props) => props.theme.colors.orange_op6} !important;
        }
        &:after,
        &:before {
          display: none;
        }
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    ul {
      max-width: calc(100% - 48px) !important;
    }
  }
`;

export default IndexTwitterGrid;
