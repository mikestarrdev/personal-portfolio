import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const helpers = createMultiStyleConfigHelpers(["container"]);

const Card = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      border: "1px solid #2c5282",
      shadow: "lg",
      h: "full",
      _dark: {
        bg: "black",
        border: "solid 1px white",
        rounded: "sm",
      },
    },
  },
});

export default Card;
