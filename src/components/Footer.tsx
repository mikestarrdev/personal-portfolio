import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <HStack
        w="full"
        p="2.5rem"
        justifyContent="center"
        spacing="1rem"
        bg="brand.accent"
        color="white"
        _dark={{
          bg: "black",
          color: "neonYellow",
          borderTop: "solid 1px #FFFF00",
        }}
      >
        <Link
          href="https://github.com/personnamedmike/personal-portfolio"
          target="_blank"
        >
          <Flex alignItems="center">
            <FaGithub />
            <Text ml="0.5rem">Source code</Text>
          </Flex>
        </Link>
        <Link href="https://linkedin.com/in/mike-starr" target="_blank">
          <Flex alignItems="center">
            <FaLinkedin />
            <Text ml="0.5rem">LinkedIn</Text>
          </Flex>
        </Link>
        <Link href="https://twitter.com/starr_dev" target="_blank">
          <Flex alignItems="center">
            <FaTwitter />
            <Text ml="0.5rem">Twitter</Text>
          </Flex>
        </Link>
      </HStack>
    </footer>
  );
};

export default Footer;
