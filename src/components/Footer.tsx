import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <VStack p="3rem">
        <HStack>
          <Box>
            <Link
              href="https://github.com/personnamedmike/personal-portfolio"
              target="_blank"
            >
              <FaGithub />
            </Link>
          </Box>
          <Text>Source code</Text>
        </HStack>
        <HStack>
          <Box>
            <Link
              href="https://github.com/personnamedmike/personal-portfolio"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </Box>
          <Text>LinkedIn</Text>
        </HStack>
      </VStack>
    </footer>
  );
};

export default Footer;
