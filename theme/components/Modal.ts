import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["header", "dialog", "footer"]);

const Modal = helpers.defineMultiStyleConfig({
  baseStyle: {
    headers: {
      _dark: {
        bg: "black",
        color: "neonYellow",
      },
    },
    footer: {
      _dark: {
        bg: "black",
        color: "neonYellow",
      },
    },
    dialog: {
      border: "2px solid #825C2C",
      _dark: {
        bg: "black",
        color: "neonYellow",
        border: "2px solid #FFFF00",
        rounded: "sm",
      },
    },
  },
});

export default Modal;
