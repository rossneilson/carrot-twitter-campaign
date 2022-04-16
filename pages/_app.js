import '../styles/fonts.css'
import '../styles/globals.css'
import '../styles/reset.css'

import styled, { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'
import theme from '../utils/theme'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 200,
      once: true
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <Component {...pageProps} />
      </StyledRoot>
    </ThemeProvider>
  )
}

const StyledRoot = styled.div`
  * {
    font-weight: 400;
    color: ${props => props.theme.colors.black};
  }
`;

export default MyApp
