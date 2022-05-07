import { useState } from 'react';
import { VStack, Text, Flex, Icon, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import imgCover1 from '../../assets/thumbs/1.jpg';
import imgCover2 from '../../assets/thumbs/2.jpg';
import imgCover3 from '../../assets/thumbs/3.jpg';
import imgCover4 from '../../assets/thumbs/4.jpg';

import styles from './test.module.scss';
import { FaPlay } from 'react-icons/fa';

const ListSeason = () => {
  const [seasonCurrent, setSeasonCurrent] = useState("Season 01");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  
  const itemSeason = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const arrThumb = [imgCover1, imgCover3, imgCover2, imgCover4, imgCover3, imgCover1, imgCover2, imgCover4]

  const LinkSeason = ({ children }) => {

    const active = children == seasonCurrent
    return (
      <Text
        as="strong"
        fontSize="18px"
        color={active ? "secundary" : "notActive"}
        cursor="pointer"
        _hover={!active && {
          color: "active",
          transition: "all 0.3s ease"
        }}
        onClick={() => setSeasonCurrent(children)}
      >
        {children}
      </Text>
    )
  }


  return (
    <Flex pt={20}>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, type: "ease" }}
      >
        <VStack gap={1}>
          <motion.p variants={itemSeason}>
            <LinkSeason>
              Season 01
            </LinkSeason>
          </motion.p>

          <motion.p variants={itemSeason} >
            <LinkSeason>
              Filme 01
            </LinkSeason>
          </motion.p>
        </VStack>
      </motion.ul>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, type: "ease" }}
      >
        <VStack
          h="600px"
          overflow="scroll"
          display="inlineBlock"
          mx={4}
          className={styles.listEps}
        >
          {arrThumb.map((thumbImg, i) => {
            return (
              <motion.li key={i} variants={item}>
                <Thumb thumb={thumbImg} />
              </motion.li>
            )
          })}
        </VStack>
      </motion.ul>
    </Flex>
  )
}

const Thumb = ({ thumb }) => {
  return (
    <div style={{ overflow: 'hidden', borderRadius: "5px", position: 'relative' }}>
      <Button
        pos="absolute"
        color="secundary"
        bg="transparent"
        border="1px solid white"
        zIndex="10"
        w="100%"
        h="100%"
      >
        <Icon as={FaPlay} />
      </Button>
      <Image src={thumb} width="240px" height="140px" objectFit='cover' alt="" />
    </div>
  )
}




export default ListSeason;