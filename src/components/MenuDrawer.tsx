import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectWallet from "./ConnectWallet";

/**
 * @remarks drawer gets rendered in Navbar component. Clicking Hamburger icon opens drawer
 * @returns Chakra-UI Drawer component
 */
const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button variant="hamburger" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Mike&#39;s Portfolio
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems="start" textAlign="left">
              <Text>Work</Text>
              <Text>Skills</Text>
              <Text>About Me</Text>
              <Text>NFT Collection</Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack w="full">
              <Box>
                <ConnectWallet />
              </Box>
              <Box w="full">
                <IconButton
                  aria-label="toggle theme"
                  rounded="md"
                  size="md"
                  onClick={toggleColorMode}
                  icon={colorMode === "dark" ? <BsMoonFill /> : <BsSun />}
                />
              </Box>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
