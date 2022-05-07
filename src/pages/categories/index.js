import { Box, Button, Container, Flex, Heading, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

import bunny from '../../assets/coverPage/bake.png'
import CardDiscorver from '../../components/card/CardDiscover';
import { dataBanners } from '../../utils/weekList';

import styles from './categories.module.scss'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.9 },
};
const container = {
  hidden: { opacity: 1, y: 45 },
  visible: {
    opacity: 1,
    y: 0
  },
};

export const Categories = () => {
  const [sectionCurrent, setSectionCurrent] = useState("Series");
  const [indexBanner, setIndexBanner] = useState(0);

  const isWidVersion = useBreakpointValue({
    base: '1000',
    md: '750',
  })

  const PseudoBox = () => {

    function setImgBanner() {
      const dataBannerAnime = dataBanners.length
      const currentIndex = indexBanner

      if (currentIndex + 1 == dataBannerAnime) {
        setIndexBanner(0)
      } else {
        setIndexBanner(currentIndex + 1)
      }
    }

    setTimeout(() => setImgBanner(), 5000)

    return (
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        style={{ position: "relative" }}
        className={styles.pseudoBox}
      >
        <Box>
          <Flex borderRadius="8px" overflow="hidden">
            <Image src={dataBanners[indexBanner].src} height={800} objectFit='cover' alt="" />
          </Flex>
        </Box>

      </motion.div>
    )
  }

  const LinkSection = ({ children }) => {
    const active = children == sectionCurrent
    return (
      <Text
        as="button"
        m={2}
        fontWeight="bold"
        fontSize="20px"
        color={active ? "secundary" : "notActive"}
        cursor="pointer"
        borderBottom={active ? "1px solid" : ""}
        borderColor={active ? "secundary" : ""}
        _hover={!active && {
          color: "active",
          transition: "all 0.3s ease"
        }}
        onClick={() => setSectionCurrent(children)}
      >
        {children}
      </Text>
    )
  }

  return (
    <>
      <Flex
        align="flex-start"
        justify="flex-start"
        bg="black"
        pos="relative"
      >
        <Image
          src={bunny}
          height={isWidVersion}
          objectFit='cover'
          alt="banner"
          className={styles.bannerAnime}
          zIndex="-1"
        />

        <Flex
          direction="column"
          pos="absolute"
          w={{base: "100%", md: "100%", lg:"50%" }}
          h="100%"
          align={{base: "center", md:"center", lg: "flex-start"}}
          justify={{base: "flex-end", md:"flex-end", lg: "center"}}
          px={20}
        >
          <Heading
            as="h1"
            size="xl"
            color="white"
            display={{ base: 'none', md: 'none', lg: 'flex' }}
          >
            Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
          </Heading>
          <Text as="strong" mr={8} mt={4} display={{ base: 'none', md: 'none', lg: 'flex' }}>
            Azusagawa Sakuta presenciou uma cena que contrariava o senso comum, em uma biblioteca encontrou uma garota vestida de coelhinha e ela não era uma coelhinha comum...
          </Text>
          <Button bg="secundary" p={4} my={10} borderRadius={24}>
            Assistir <Icon as={FaPlay} ml={4} />
          </Button>

        </Flex>

      </Flex >

      <Container maxW="1480" py={8}>

        <Flex
          as="nav"
          justify="space-around"
          width="100%"
          borderBottom='1px solid'
          borderColor="divisor"
        >
          <LinkSection>
            Series
          </LinkSection>
          <LinkSection>
            Filmes
          </LinkSection>
        </Flex>

        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, type: "ease" }}
        >
          <Flex
            as="section"
            align="center"
            justify="center"
            flexWrap="wrap"
            direction="row"
            my={4}
          >
            <CardDiscorver haveCateg={true}>
              <PseudoBox />
            </CardDiscorver>
          </Flex>
        </motion.ul>

      </Container>
    </>
  );
}

export default Categories