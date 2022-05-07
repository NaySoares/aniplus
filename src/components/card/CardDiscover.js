import { Button, Flex, Icon, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { dataAnimes } from '../../utils/weekList';

export const CardDiscorver = ({ children, haveCateg = false }) => {
  const [categoryCurrent, setCategoryCurrent] = useState("Romance");

  const isWideVersion = useBreakpointValue({
    base: [false, 4],
    md: [false, 6],
    lg: [false, 8],
    xl: [false, 10]
  })
  let arrAnimes = []
  isWideVersion[0] ? arrAnimes = dataAnimes : arrAnimes = dataAnimes.slice(0, isWideVersion[1])

  let arrAnimesTwo = dataAnimes.slice(10, dataAnimes.length);
  const arrCategory = ['Romance', 'Misterio', 'Escolar', 'SliceOfLife', 'Comédia', 'Bravito']

  // function arrRandom(array) {
  //   let currentIndex = array.length,  randomIndex;
    
  //   while (currentIndex != 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }
  //   return array;
  // }

  return (
    <>
    {haveCateg ? 
      <Flex
        as="nav"
        justify="space-around"
        width="100%"
        my={2}
      >
        {arrCategory.map((category, i) => {
          const active = category == categoryCurrent
          return (
            <Button
              key={i}
              borderRadius="999"
              color={active ? "white" : "secundary"}
              bg={active ? "secundary" : "primaryTwo"}
              px={4}
              onClick={() => setCategoryCurrent(category)}
            >
              <Text
                as="p"
                fontSize="12px"
              >
                {category}
              </Text>
            </Button>
          )
        })}
        <Button
          borderRadius="999"
          color="secundary"
          bg="transparent"
          border="1px solid white"
          px={4}>
          <Icon as={FaSearch} />
        </Button>
      </Flex>
      :
      <></>
      } 

      {arrAnimes.map((anime) => {
        return (
          <Flex
            as="a"
            key={anime.id}
            href="/anime"
            align="flex-start"
            justify="flex-start"
            direction="column"
            m={{ base: 2, md: 4, lg: 4 }}
            p={2}
            w="210px"
            h="380px"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.4s ease-in-out"
            }}
          >

            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <Image src={anime.cover} width={180} height={280} alt='capa anime' objectFit='cover' />
            </div>
            <Text as="p" marginTop={1} fontSize="11px" color="secundary">{anime.season}</Text>
            <Text as="p" noOfLines={[1, 2]} fontSize="15px" color="white">{anime.name}</Text>
          </Flex>
        )
      })}

      {children}

      {arrAnimesTwo.map((anime) => {
        return (
          <Flex
            as="a"
            href="/anime"
            key={anime.id}
            align="flex-start"
            justify="flex-start"
            direction="column"
            m={{ base: 2, md: 4, lg: 4 }}
            p={2}
            w="210px"
            h="380px"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "all 0.4s ease-in-out"
            }}
          >

            <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <Image src={anime.cover} width={180} height={280} alt='capa anime' objectFit='cover' />
            </div>
            <Text as="p" marginTop={1} fontSize="11px" color="secundary">{anime.season}</Text>
            <Text as="p" noOfLines={[1, 2]} fontSize="15px" color="white">{anime.name}</Text>
          </Flex>
        )
      })}
    </>
  )
}

export default CardDiscorver;