import { Box, HStack, useColorMode, IconButton } from "@chakra-ui/react";

import React from "react";
import MenuDrawer from "./MenuDrawer";
import { BsSun, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      border="1px"
      bg="gray.300"
      p="0.5rem"
    >
      <Box>
        <MenuDrawer />
      </Box>
      <Box>
        <IconButton
          aria-label="toggle theme"
          rounded="md"
          size="md"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <BsMoonFill /> : <BsSun />}
        />
      </Box>
    </HStack>
  );
};

export default Navbar;
