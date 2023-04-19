import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Welcome = () => {
  return (
    <>
      <Box textAlign="center">
        <Heading as="h2" my="1rem">
          Hey there, welcome to my portfolio!
        </Heading>
        <Text>
          I&#39;m a super passionate software developer who&#39;s always hungry
          to learn and level up my skills. I&#39;m deeply enthusiastic about
          using the latest tech to solve problems.
        </Text>
        <br />
        <Text>
          This portfolio is my proof-of-talent. I&#39;ve created it using
          TypeScript, JavaScript, Next.js, Node.js, and Chakra-UI for styling.
        </Text>
        <br />
        <Text>
          So go ahead, scroll down and check out the amazing projects I&#39;ve
          worked on. And hey, if you want to get in touch with me, just click
          the hamburger icon on the top left and head on over to the Contact
          page. Let&#39;s connect!
        </Text>
        {/* <br />
        <Text>
          Also, make sure to check out my NFT collection that I deployed to the
          Polygon mainnet! You can navigate there from the left-side drawer as
          well.
        </Text> */}
      </Box>
      {/* <Divider my="2rem" /> */}
      <HStack
        spacing="1rem"
        justifyContent="center"
        m="auto"
        textAlign="left"
        my="2rem"
        _dark={{ color: "neonYellow" }}
      >
        <Link href="https://github.com/personnamedmike/" target="_blank">
          <Flex alignItems="center" w="fit-content">
            <FaGithub />
            <Text ml="0.5rem">GitHub</Text>
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
      <Divider my="2rem" />
    </>
  );
};

export default Welcome;
