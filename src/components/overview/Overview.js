import { Heading, Button, Flex, Text, Icon } from '@chakra-ui/react'
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Overview = () => {
  const [sectionCurrent, setSectionCurrent] = useState("Overview");

  const container = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
    }
  };


  const LinkSection = ({ children }) => {

    const active = children == sectionCurrent
    return (
      <Text
        as="p"
        mx={2}
        fontSize="18px"
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, type: "easeInOut" }}
    >
      <Flex
        pt={20}
        as="section"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        ml={16}
      >

        <Flex flex={1}></Flex>
        <Flex direction="column">
          <Heading as="h1" size="2xl" color="white">
            Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai
          </Heading>
          <Flex direction="row" mt={4}>
            <Text as="strong" mr={8}>
              Fall 2018
            </Text>
            <Text as="strong">
              1 Season | 1 Filme
            </Text>
          </Flex>
          <Text as="p">
            Romance, Sobrenatural, Drama
          </Text>
        </Flex>

        <Flex w="100%" justify="flex-start" mt={10}>
          <Button bg="secundary" p={4} borderRadius={24}>
            Continuar Assistindo <Icon as={FaPlay} ml={4} />
          </Button>
        </Flex>

        <Flex
          flex={1}
          mb={10}
          mt="auto"
          px={6}
          py={6}
          display="flex"
          justify="space-between"
          align="flex-end"
          width="100%">
          <LinkSection>
            Overview
          </LinkSection>
          <LinkSection>
            Detalhes
          </LinkSection>
          <LinkSection>
            Episódios
          </LinkSection>
        </Flex>

      </Flex>
    </motion.div>
  )
}

export default Overview;