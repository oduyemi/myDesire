import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: "#23001E", // Dark background color
    teal: {
      500: '#00bcd4',
      600: '#0097a7',
    },
  },
  styles: {
    global: {
      body: {
        bg: "#23001E", // Dark background for the whole page
        color: "white", // White text for contrast
      },
    },
  },
});

export default theme;
