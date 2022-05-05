import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../theme-toggle-button";

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href;
  return (
    <Flex
      align="center"
      h="70px"
      px={2}
      borderBottom="3px solid"
      borderRadius="2px"
      borderColor={active ? 'secundary' : 'transparent'}
    >
      <NextLink href={href} passHref>
        <Link
          color={active ? 'active' : 'notActive'}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    </Flex>
  );
};

const Navbar = ({ path, isFixed, isMenuCenter, textLogo }) => {
  return (
    <Box
      position={isFixed ? "fixed" : "relative"}
      w="100%"
      bg='navPrimary'
      style={{ "backdropFilter": "blur(4px)" }}
      zIndex={1}
      _hover={{
        backgroundColor: "primary",
        transition: "all 0.5s ease",
      }}
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
        borderBottom="1px solid"
        borderColor='divisor'
      >
        <Flex align="center" mr={5}>
          <Heading as="h2" size="md" letterSpacing={"tighter"}>
            <Text>{textLogo}</Text>
          </Heading>
        </Flex>

        <Flex
          flex={1}
          direction="row"
          align="center"
          justify={isMenuCenter ? "center" : "flex-end"}
        >
          {isMenuCenter ? <Box marginRight="auto" /> : <></>}

          <Stack
            as="nav"
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
            mr={{ base: 4, md: 10 }}
          >
            <LinkItem href="/" path={path}>
              Home
            </LinkItem>
            <LinkItem href="/categories" path={path}>
              Categorias
            </LinkItem>
            <LinkItem href="/discovery" path={path}>
              Descubra
            </LinkItem>
            <LinkItem href="/profile" path={path}>
              Perfil
            </LinkItem>
          </Stack>

          <Box marginLeft={isMenuCenter ? "auto" : ""}>
            <ThemeToggleButton />
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>
                  <NextLink href="/categories" passHref>
                    <MenuItem as={Link}>Categorias</MenuItem>
                  </NextLink>
                  <NextLink href="/discovery" passHref>
                    <MenuItem as={Link}>Descubra</MenuItem>
                  </NextLink>
                  <NextLink href="/profile" passHref>
                    <MenuItem as={Link}>Perfil</MenuItem>
                  </NextLink>
                  <MenuItem as={Link} href="https://github.com/NaySoares">
                    GitHub
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
