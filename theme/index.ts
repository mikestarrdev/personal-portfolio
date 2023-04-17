import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Button from "./components/Button";
import Drawer from "./components/Drawer";

const colors = {
  brand: {
    // 900: "#1a365d",
    // 800: "#153e75",
    // 700: "#2a69ac",
  },
};

const components = {
  Button,
  Drawer,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      m: 0,
      p: 0,
      overflowX: "hidden",
      bg: mode("white", "black"),
      color: mode("black", "white"),
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
