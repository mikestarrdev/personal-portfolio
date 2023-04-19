import { defineStyleConfig } from "@chakra-ui/react";

const Textarea = defineStyleConfig({
  baseStyle: {
    border: "1px solid white",
  },
  variants: {
    contactForm: {
      border: "1px solid #2c5282",
      px: 2,
      _placeholder: {
        textTransform: "uppercase",
        fontSize: "sm",
      },
      _dark: {
        border: "0.5px solid white",
        bg: "black",
      },
    },
  },
  defaultProps: {
    variant: "contactForm",
  },
});

export default Textarea;
