import { Box, HStack, useColorMode, IconButton, Link } from "@chakra-ui/react";

import React from "react";
// import MenuDrawer from "./MenuDrawer";
import { BsSun, BsMoonFill } from "react-icons/bs";
import MenuDrawer from "./MenuDrawer";
// import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      position="fixed"
      zIndex={1}
      w="100%"
      justifyContent="space-between"
      border="1px"
      bg="blue.700"
      py={2}
      pl={[2, 2, 4]}
      pr={2}
      color='white'
      fontWeight='semibold'
      _dark={{
        bg: "black",
        borderColor: "neonYellow",
      }}
    >

        <Box display={["block", "block", "none"]}>
          <MenuDrawer />
        </Box>
        <Box display={["none", "none", "block"]}>
          <HStack spacing={8}>
          <Link href='/'>Home</Link>
          <Link href='#about'>About</Link>
          <Link href='#projects'>Projects</Link>
          <Link href='/contact'>Contact</Link>
        </HStack>
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
      </HStack>
    </HStack>
  );
};

export default Navbar;
