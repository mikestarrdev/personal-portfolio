import { StyleFunctionProps } from "@chakra-ui/styled-system";

const Drawer = {
  baseStyle: (props: StyleFunctionProps) => ({
    header: {
      color: "black",
      bg: "white",
      _dark: {
        color: "white",
        bg: "black",
      },
    },
    body: {
      _dark: {
        color: "white",
        bg: "black",
        borderRight: "1px",
      },
    },
    footer: {
      borderTop: "1px",
      _dark: {
        color: "white",
        bg: "black",
        borderTop: "1px",
        borderRight: "1px",
      },
    },
  }),
};

export default Drawer;
