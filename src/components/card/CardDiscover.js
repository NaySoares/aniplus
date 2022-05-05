import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { dataAnimes } from '../../utils/weekList';

export const CardDiscorver = () => {
  const isWidVersion = useBreakpointValue({
    base: false,
    md: true
  })
  let arrAnimes = []
  isWidVersion ? arrAnimes = dataAnimes : arrAnimes = dataAnimes.slice(0, 4)

  return (
    <>
      {arrAnimes.map((anime, i) => {
        return (
          <Flex
            as="a"
            href="/anime"
            key={i}
            align="flex-start"
            justify="flex-start"
            direction="column"
            m={4}
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