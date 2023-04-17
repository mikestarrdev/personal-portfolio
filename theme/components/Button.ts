import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    // bg: "orange",
  },
  sizes: {},
  variants: {
    hamburger: {
      bg: "white",
      color: "black",
      border: "1px solid black",
      _dark: {
        bg: "black",
        color: "white",
        border: "solid white 1px",
      },
    },
  },
  defaultProps: {
    variant: "hamburger",
  },
});

export default Button;
