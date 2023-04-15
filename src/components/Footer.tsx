import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <VStack p="5rem" border="4px">
        <Box w="2rem">
          <FaGithub size="md" />
        </Box>
      </VStack>
    </footer>
  );
};

export default Footer;
