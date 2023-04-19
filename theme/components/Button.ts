import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    cursor: "pointer",
  },
  sizes: {},
  variants: {
    hamburger: {
      bg: "white",
      border: "1px solid black",
      boxShadow: "1px 2px #825C2C",
      _hover: {
        transform: "translateY(0.5px)",
      },
      _active: {
        boxShadow: "1px 1px #825c2c",
        transform: "translateY(2px)",
      },
      _dark: {
        bg: "black",
        color: "white",
        border: "1px solid white",
        boxShadow: "2px 4px 0 #FFFF00",
        _active: {
          boxShadow: "1px 1px #FFFF00",
          transform: "translateY(2px) translateX(1px)",
          border: "1px solid #FFFF00",
        },
      },
    },
    links: {
      color: "black",
      border: "1px solid #2c5282",
      bg: "white",
      rounded: "md",
      py: 0.5,
      boxShadow: "2px 4px 0 #825c2c",
      _hover: {
        transform: "translateY(0.5px)",
      },
      _active: {
        boxShadow: "1px 1px #825c2c",
        transform: "translateY(2px)",
      },
      _dark: {
        bg: "black",
        color: "white",
        border: "1px solid white",
        boxShadow: "2px 4px 0 #FFFF00",
        _active: {
          boxShadow: "1px 1px #FFFF00",
          transform: "translateY(2px) translateX(1px)",
          border: "1px solid #FFFF00",
        },
      },
    },
  },
  defaultProps: {
    variant: "hamburger",
  },
});

export default Button;
