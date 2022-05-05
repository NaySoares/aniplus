import React, { useState } from 'react';
import styles from './slide.module.scss';
import { SlideItem } from './SlideItem';
import Image from 'next/image';

import { dataAnimes } from '../../utils/weekList';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

const SliderContainer = ({ handleplay }) => {
  const [infoAnime, setInfoAnime] = useState({})
  const [modalPreview, setModalPreview] = useState(false)

  function handlePreview(obj) {
    setInfoAnime(obj)
    setModalPreview(true)
  }

  return (
    <>
      <div className={styles.containerSlide}>
        <div className={styles.contentSlide}>
          {dataAnimes.map((obj, i) => {
            return (
              <SlideItem key={i}>
                <Image src={obj.cover} onClick={() => handlePreview(obj)} width="280px" height="400px" alt="capa anime" className={styles.coverAnime} />
              </SlideItem>
            )
          })}
        </div>
      </div>
      {modalPreview ?
        <>
          <Flex
            align="center"
            justify="center"
            h="100vh"
            w="100vw"
            position="absolute"
            onClick={() => setModalPreview(false)}
            className={styles.modal}
          >
            <Flex
              direction="row"
              align="center"
              onClick={() => setModalPreview(false)}
              w="65%"
              h="70%"
            >
              <Flex position="relative">
                <Button
                  onClick={() => handleplay()}
                  bg="secundary"
                  borderRadius="full"
                  h="80px"
                  className={styles.btn}
                  style={{ left: "50%", top: "280px", zIndex: "10", }}
                >
                  Assitir
                </Button>
                <Image
                  src={infoAnime.cover}
                  width="380px"
                  height="560px"
                  alt="capa anime"
                  className={styles.coverAnime}
                />
              </Flex>
              
              <Flex
                as="section"
                bg="white"
                direction="column"
                p={4}
                flex="1"
                h="520px"
                className={styles.infoModal}
              >
                <Flex as="head" align="center" justify="center" py={4} borderBottom="1px solid" borderColor="rgba(103, 103, 103, 0.2)">
                  <Heading as="h3" size="md" color="primary">{infoAnime.name}</Heading>
                </Flex>
                <Flex align="left" py={2} >
                  <Text as="strong" size="md" color="gray.600">Estréia</Text>
                  <Text as="p" marginLeft={4} size="md" color="gray.600">Inverno de 2019</Text>
                </Flex>
                <Flex align="left" py={2} >
                  <Text as="strong" size="md" color="gray.600">Gênero</Text>
                  <Text as="p" marginLeft={4} size="md" color="gray.600">Mistério, Romance</Text>
                </Flex>
                <Flex align="left" flex="1" py={2} overflow="scroll">
                  <Text as="strong" size="md" color="gray.600">Sinopse</Text>
                  <Text as="p" marginLeft={4} size="md" color="gray.600">{infoAnime.description}</Text>
                </Flex>
                <Flex direction="column" align="center" justify="flex-end" borderTop="1px solid rgba(103, 103, 103, 0.2)" py={3} >
                  <Text as="strong" fontSize="2xl" color="gray.600">76%</Text>
                  <Text as="strong" size="md" color="gray.600">Popularidade Anilist</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </>
        :
        <>
        </>
      }
    </>
  )
}



export default SliderContainer

