import { defineStyleConfig } from "@chakra-ui/react";

const Divider = defineStyleConfig({
  baseStyle: {
    my: "2rem",
    w: ["full", "full", "90%", "80%"],
    textAlign: "center",
    mx: "auto",
    color: "gray.300",
  },
});

export default Divider;
