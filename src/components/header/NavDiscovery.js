import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

const LinkItem = ({ href, current, children, ...props }) => {
  const isActive = current == "ran";
  
  return (
    <Flex
      align="center"
      h="70px"
      px={2}
      borderBottom="3px solid"
      borderRadius="2px"
      borderColor={isActive ? 'secundary' : 'transparent'}
    >
      <NextLink href={href} passHref borderColor={"blue"}>
        <Link
          color={isActive ? 'active' : 'notActive'}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    </Flex>
  );
};

const NavDiscovery = ({ textLogo }) => {
  return (
    <Box
      as="nav"
      w="100%"
      bg='primary'
    >
      <Container
        display="flex"
        as="div"
        px={5}
        py={{ base: "5", md: "0" }}
        maxW="85%"
        wrap="wrap"
        align="center"
        justify="center"
      >
        <Flex align="center" justify="center" mr={5} flex={{ base: 1, md: 0 }}>
          <Heading as="h2" size="md" letterSpacing={"tighter"}>
            <Text>{textLogo}</Text>
          </Heading>
        </Flex>

        <Flex
          flex={1}
          direction="row"
          align="center"
          justify="center"
          display={{ base: "none", md: "inlineFlex" }}
        >
          <Stack
            as="nav"
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
            mr={{ base: 4, md: 10 }}
          >
            <LinkItem href="" current="ran">
              Aleatório
            </LinkItem>
            <LinkItem href="" current="pop">
              Populares
            </LinkItem>
            <LinkItem href="" current="clas">
              Clássicos
            </LinkItem>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavDiscovery;
