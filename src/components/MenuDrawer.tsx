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
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSun } from "react-icons/bs";
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
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <Heading as="h1" fontSize="2xl">
                Mike&apos;s Portfolio
              </Heading>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <List spacing={"0.5rem"}>
              <ListItem>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  Home
                </Link>
              </ListItem>
              {/* <ListItem>NFT Collection</ListItem> */}
              <ListItem>
                <Link
                  href="contact"
                  _hover={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Contact Me
                </Link>
              </ListItem>
            </List>
          </DrawerBody>

          <DrawerFooter>
            <HStack w="full" justifyContent="space-between">
              {/* <Box>
                <ConnectWallet />
              </Box> */}
              <Box>
                <IconButton
                  aria-label="toggle theme"
                  rounded="md"
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
