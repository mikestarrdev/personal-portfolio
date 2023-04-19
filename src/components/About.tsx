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

const About = () => {
  return (
    <Box textAlign="center" id="about">
      <Divider mt="3rem" mb="2rem" />
      <Box>
        <Heading as="h2" my="1rem">
          {/* Crafting the Future: Mike&apos;s Work */}
          About
        </Heading>
        <Text>
          I&#39;m a passionate software developer who is always eager to learn
          and grow. I love diving deep into complex projects and using the
          latest tech to create products that make a difference.
        </Text>
        <br />
        <Text>
          My forte lies in crafting intuitive and engaging user interfaces that
          keep users coming back for more. I thrive on using front-end
          technologies such as TypeScript, JavaScript, React, CSS, and HTML to
          make the web come alive. And when it comes to the backend, I&#39;m no
          stranger to NodeJS and Ruby on Rails.
        </Text>
        <br />
      </Box>
      <Divider my="2rem" />
      <HStack
        spacing="1rem"
        justifyContent="center"
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

      <Box>
        <Heading as="h3" my="1rem">
          Other Adventures
        </Heading>
        <Text>
          In addition to coding and technology, I have dedicated an
          extraordinary amount of energy to technical mountain climbing, and I
          thoroughly enjoy scaling enormous peaks. 🏔️
        </Text>
        <br />
        <Text>
          When I&#39;m not coding or conquering mountains, I&#39;m exploring the
          world and immersing myself in new cultures. I&#39;ve set foot in over
          35 countries and spent a significant amount of time soaking up the
          vibes of Asia and Latin America.
        </Text>
        <br />
        <Text>
          But let&#39;s get real - nothing beats a delicious cup of coffee
          (aeropress is my go-to) and some scrumptious food. It&#39;s the simple
          pleasures in life that really get me going!
        </Text>
      </Box>

      <Divider my="2rem" />
    </Box>
  );
};

export default About;
