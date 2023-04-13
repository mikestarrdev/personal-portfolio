import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  return (
    <HStack>
      <Box>
        <MenuDrawer />
      </Box>
      <Box>Mike</Box>
    </HStack>
  );
};

export default Navbar;
