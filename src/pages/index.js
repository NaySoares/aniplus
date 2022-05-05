import { AspectRatio, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import CardDiscorver from '../components/card/CardDiscover';
import NavDiscovery from '../components/header/NavDiscovery';
import SliderContainer from '../components/slider/SliderContainer';
import VideoPlay from '../components/videoPlay'


export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <main>
      <Modal isOpen={isOpen} size={'4xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClose={onClose} />
          <ModalBody>
            <AspectRatio maxW='1144px' ratio={16 / 9}>
              <VideoPlay />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex
        as="div"
        align="center"
        justify="center"
        my={10}
      >
        <Text
          as="strong"
          fontSize="x-large"
          color="white"
        >
          Animes da temporada
        </Text>
      </Flex>
      <SliderContainer handleplay={onOpen} />

      <Flex
        as="section"
        align="center"
        justify="center"
        mt={24}
        pb={10}
        direction="column"
        bg="primaryTwo"
      >
        <NavDiscovery textLogo={"Descubra"} />
        <Flex
          align="center"
          justify="center"
          flexWrap="wrap"
          direction="row"
        >
          <CardDiscorver />
        </Flex>
        <Button as="button" bg="secundary">Descubra mais!</Button>
      </Flex>
    </main >
  );
}

export default Home