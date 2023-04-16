import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import Button from "./components/button";

const colors = {
  brand: {
    // 900: "#1a365d",
    // 800: "#153e75",
    // 700: "#2a69ac",
  },
};

const components = {
  Button,
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
      _dark: {
        bg: "black",
        color: "white",
      },
    },
  },
};

const fonts = {
  heading: `Inter, sans-serif`,
  body: `Inter, sans-serif`,
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components,
  colors,
  styles,
  fonts,
  config,
});

export default theme;
