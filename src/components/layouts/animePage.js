import Head from 'next/head'
import Navbar from '../header/navbar'
import { Box, Container } from '@chakra-ui/react'

const AnimePage = ({ children, router }) => {
  return (
    <Box as='main'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Anime Streaming Full HD" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>AniPlus</title>
      </Head>

      <Navbar
        path={router.asPath}
        isFixed={true}
        isMenuCenter={false}
        textLogo={"AniPlus"}
      />

      <Container maxW="1480">
        {children}
      </Container>
    </Box>
  )
}

export default AnimePage