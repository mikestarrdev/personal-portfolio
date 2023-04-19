import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Drawer from "./components/Drawer";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Modal from "./components/Modal";

const colors = {
  neonYellow: "#FFFF00",
  brand: {
    primary: "#2c5282",
    accent: "#825C2C",
  },
};

const components = {
  Alert,
  Button,
  Drawer,
  Heading,
  Input,
  Textarea,
  Modal,
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
    a: {
      _hover: {
        textDecoration: "none",
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
