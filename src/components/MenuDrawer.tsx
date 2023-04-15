import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Mike</DrawerHeader>
          <DrawerBody>
            <Text>Projects</Text>
            <Text>Skills</Text>
            <Text>About Me</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
