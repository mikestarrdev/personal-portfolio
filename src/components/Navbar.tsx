import { Box, HStack, useColorMode, IconButton } from "@chakra-ui/react";

import React from "react";
import MenuDrawer from "./MenuDrawer";
import { BsSun, BsMoonFill } from "react-icons/bs";
// import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      borderBottom="1px"
      borderTop="1px"
      bg="blue.700"
      p="0.5rem"
      _dark={{
        bg: "black",
        borderColor: "neonYellow",
      }}
    >
      <Box>
        <MenuDrawer />
      </Box>
      <HStack>
        <Box>
          <IconButton
            aria-label="toggle theme"
            rounded="md"
            onClick={toggleColorMode}
            icon={colorMode === "dark" ? <BsMoonFill /> : <BsSun />}
          />
        </Box>
        {/* <Box>
          <ConnectWallet />
        </Box> */}
      </HStack>
    </HStack>
  );
};

export default Navbar;
