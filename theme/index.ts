import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      m: 0,
      p: 0,
      bg: "white",
      overflowX: "hidden",
    },
  },
};

const theme = extendTheme({
  colors,
  styles,
});

export default theme;
