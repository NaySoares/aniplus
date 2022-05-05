import { useState } from 'react';
import { VStack, Text, Flex, Icon, Button } from '@chakra-ui/react';
import Image from 'next/image';
import imgCover1 from '../../assets/thumbs/1.jpg';
import imgCover2 from '../../assets/thumbs/2.jpg';
import imgCover3 from '../../assets/thumbs/3.jpg';
import imgCover4 from '../../assets/thumbs/4.jpg';

import styles from './test.module.scss';
import { FaPlay } from 'react-icons/fa';

const ListSeason = () => {
  const [seasonCurrent, setSeasonCurrent] = useState("Season 01");

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
      <VStack gap={1}>
        <LinkSeason>
          Season 01
        </LinkSeason>
        <LinkSeason>
          Filme 01
        </LinkSeason>
      </VStack>

      <VStack
        h="600px"
        overflow="scroll"
        display="inlineBlock"
        mx={4}
        className={styles.listEps}
      >
        <Thumb thumb={imgCover4} />
        <Thumb thumb={imgCover2} />
        <Thumb thumb={imgCover3} />
        <Thumb thumb={imgCover1} />
        <Thumb thumb={imgCover4} />
        <Thumb thumb={imgCover2} />
        <Thumb thumb={imgCover3} />
        <Thumb thumb={imgCover1} />
        <Thumb thumb={imgCover2} />
      </VStack>
    </Flex>
  )
}

const Thumb = ({ thumb }) => {
  return (
    <div style={{ overflow: 'hidden', borderRadius: "5px", position: 'relative'}}>
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