import { Box } from '@chakra-ui/react';


export const SlideItem = ({ children }) => {
  return (
    <Box
      width="280px"
      cursor="pointer"
      mx={10}
      display="inline-block"
    >
      {children}
    </Box>
  )
}