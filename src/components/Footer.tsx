import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <VStack p="3rem">
        <Link
          href="https://github.com/personnamedmike/personal-portfolio"
          target="_blank"
        >
          <Flex alignItems="center">
            <FaGithub />
            <Text ml="0.5rem">Source code</Text>
          </Flex>
        </Link>

        <Link
          href="https://github.com/personnamedmike/personal-portfolio"
          target="_blank"
        >
          <Flex alignItems="center">
            <FaLinkedin />
            <Text ml="0.5rem">LinkedIn</Text>
          </Flex>
        </Link>
      </VStack>
    </footer>
  );
};

export default Footer;
