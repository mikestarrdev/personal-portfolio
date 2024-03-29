import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Link,
  List,
  ListItem,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonFill, BsSun } from "react-icons/bs";

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
              <ListItem>
                <Link href="/#about" _hover={{ textDecoration: "none" }}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/#projects" _hover={{ textDecoration: "none" }}>
                  Projects
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/contact"
                  _hover={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Contact
                </Link>
              </ListItem>
            </List>
          </DrawerBody>

          {/* <DrawerFooter>
            <HStack w="full" justifyContent="space-between">
              <Box>
                <IconButton
                  aria-label="toggle theme"
                  rounded="md"
                  onClick={toggleColorMode}
                  icon={colorMode === "dark" ? <BsMoonFill /> : <BsSun />}
                />
              </Box>
            </HStack>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
