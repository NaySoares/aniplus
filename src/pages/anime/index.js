import { Button, Flex, Icon } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa';
import ListSeason from '../../components/list/listSeason';
import Overview from '../../components/overview/Overview';
import styles from './anime.module.scss';

const PageAnime = () => {
  return (
    <Flex
      as="div"
      align="center"
      justify="center"
      h="100vh"
      className={styles.container}
    >
      <FlexDefault>
        <Overview />
      </FlexDefault>
      
      <FlexDefault>
        <Flex
          pt={20}
          as="section"
          direction="column"
          align="center"
          justify="center"
          h="100vh"
          ml={16}
        >
          <Button
            borderRadius="999"
            color="secundary"
            bg="transparent"
            border="1px solid white"
            p={8}
          >
            <Icon as={FaPlay}/>
          </Button>
        </Flex>
      </FlexDefault>

      <FlexDefault>
        <ListSeason />
      </FlexDefault>
    </Flex>
  );
}

const FlexDefault = ({ children }) => {
  return (
    <Flex h="100vh" flex={1} align="center" justify="center">
      {children}
    </Flex>
  )
}

export default PageAnime