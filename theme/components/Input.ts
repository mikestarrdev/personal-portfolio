import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const Input = defineMultiStyleConfig({
  baseStyle: {
    field: {
      border: "1px solid #825C2C",
      _dark: {
        bg: "black",
        border: "0.5px solid white",
      },
      _placeholder: {
        _dark: {
          color: "neonYellow",
          fontSize: "sm",
        },
      },
    },
  },
  variants: {
    contactInput: {
      field: {
        border: "1px solid #2c5282",
        ml: 0,
        _placeholder: {
          fontSize: "sm",
          textTransform: "uppercase",
        },
      },
    },
    inputButton: {
      field: {
        color: "black",
        border: "1px solid #2c5282",
        bg: "white",
        rounded: "md",
        py: 0.5,
        boxShadow: "2px 4px 0 #825c2c",
        _hover: {
          bg: "gray.100",
          transform: "translateY(0.5px)",
          cursor: "pointer",
        },
        _active: {
          boxShadow: "1px 1px #825c2c",
          transform: "translateY(1px) translateX(1px)",
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
  },
  sizes: {
    md: {
      field: {
        px: 2,
      },
    },
  },
  defaultProps: {
    variant: "contactInput",
  },
});

export default Input;
