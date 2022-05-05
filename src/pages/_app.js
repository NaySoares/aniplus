import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from '../lib/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp;
