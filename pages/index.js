import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import IndexHero from './../components/_index/IndexHero'
import IndexInfo from './../components/_index/IndexInfo'
import Header from './../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carrot Awareness Campaign</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

      </Head>
      <StyledIndexPage>
        <Header>
          <IndexHero />
        </Header>
        <main id="index">
          <IndexInfo />
        </main>
        <span className="year">
          • 2022 •
        </span>
      </StyledIndexPage>
    </>
  )
}

const StyledIndexPage = styled.div`
  background: ${(props) => props.theme.gradients.backgroundGradient};
  padding-bottom: 130px;
  .year {
    text-align: center;
    display: block;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray800};
    font-weight: 300;
  }
`;