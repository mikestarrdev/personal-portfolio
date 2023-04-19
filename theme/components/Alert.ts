import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const Alert = defineMultiStyleConfig({
  baseStyle: {
    container: {
      bg: "white",
      color: "black",
      border: "2px solid #825C2C",
      px: "2rem",
      py: "1rem",
      rounded: "xl",
      _dark: {
        bg: "black",
        color: "neonYellow",
        border: "2px solid #FFFF00",
      },
    },
    icon: {
      color: "black",
      _dark: {
        color: "neonYellow",
      },
    },
    title: {
      color: "black",
      _dark: {
        color: "neonYellow",
      },
    },
    description: {
      color: "black",
      _dark: {
        color: "neonYellow",
      },
    },
  },
});

export default Alert;
