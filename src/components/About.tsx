import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

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
      <br />
      <Text>Let&#39;s build something awesome together!</Text>
    </Box>
  );
};

export default About;
