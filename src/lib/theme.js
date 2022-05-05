import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#E5EBF1', '#0C1227')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#2B6CB0', '#ff63c3')(props),
      textUnderLineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'Heebo'",
};

const colors = {
  primary: '#0C1227',
  primaryTwo: '#0A0F1F',
  secundary: '#F0606F',
  navPrimary: 'rgba(10, 15, 31, 0.4)',
  divisor: 'rgba(103, 103, 103, 0.2)',
  active: '#FFFF',
  notActive: '#AAAA',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
