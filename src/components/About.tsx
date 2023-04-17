import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <Box textAlign="center">
      <Heading as="h2">About</Heading>
      <Text>Hey there, welcome to my world of coding!</Text>
      <br />
      <Text>
        I&#39;m a passionate software developer who is always eager to learn and
        grow. I love diving deep into complex projects and using the latest tech
        to create products that make a difference.
      </Text>
      <br />
      <Text>
        My forte lies in crafting intuitive and engaging user interfaces that
        keep users coming back for more. I thrive on using front-end
        technologies such as TypeScript, JavaScript, React, CSS, and HTML to
        make the web come alive. And when it comes to the backend, I&#39;m no
        stranger to NodeJS and Ruby on Rails.
      </Text>

      {/* start socials */}
      <HStack
        spacing="1rem"
        w="fit-content"
        m="auto"
        textAlign="left"
        my="1rem"
        fontSize="lg"
      >
        <Link href="https://github.com/personnamedmike/" target="_blank">
          <Flex alignItems="center" w="fit-content">
            <FaGithub />
            <Text ml="0.5rem">GitHub</Text>
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
        <Link href="https://twitter.com/starr_dev" target="_blank">
          <Flex alignItems="center">
            <FaTwitter />
            <Text ml="0.5rem">Twitter</Text>
          </Flex>
        </Link>
      </HStack>
    </Box>
  );
};

export default About;
