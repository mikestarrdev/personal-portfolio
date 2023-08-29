import { Box, Flex, HStack, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  return (
    <>
      <Box textAlign="center" id='about'>
        <Heading
          as="h2"
          my="1.5rem"
          fontWeight="bold"
          _dark={{ color: "neonYellow" }}
        >
          Mike Starr&#39;s Portfolio
        </Heading>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000,
            'React + TypeScript Developer',
            1000,
            'Responsive web design',
            1000,
            'JavaScript, CSS, HTML',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', marginBottom: '4rem' }}
          repeat={Infinity}
        />

        <Box textAlign="center" w={["full", "full", "80%", "60%"]} m="auto">
          <Heading as="h3" fontSize="x-large" fontWeight="bold">Introduction</Heading>
          <Text>
            I transitioned from digital marketing to software engineering. Now, I&#39;m a developer at <span style={{fontWeight: "bold"}}>AirSwap</span>, a decentralized protocol that has facilitated trades worth over $3.68 billion in value. I&#39;m passionate about crafting top-notch user experiences. My skill set includes React, TypeScript, JavaScript, CSS, and HTML. But, my goal? Building apps that truly connect with users.
          </Text>
          <br />
          <Heading as="h3" fontSize="x-large" fontWeight="bold">The Beginning</Heading>
          <Text>
            In 2020, I dove into software development, starting with JavaScript. Feeling the pull, I took it up a notch. I enrolled at <span style={{fontWeight: "bold"}}>Flatiron School</span> for full-stack software engineering. There, I got hands-on with languages and tech: JavaScript, React, Ruby, Ruby on Rails, REST API, Sinatra, and Active Record. But Flatiron wasn&#39;t just about coding; it taught me <em>how to learn</em>. That experience boosted my foundation in software dev and my confidence.
          </Text>
          <br />
          <Heading as="h3" fontSize="x-large" fontWeight="bold">Stepping into the World of Blockchain</Heading>
          <Text>
            After graduation, I explored the blockchain ecosystem. I participated in top hackathons:
          </Text>
          <br />
          <Heading as="h3" fontSize="x-large" fontWeight="bold">Stepping into the World of Blockchain</Heading>
          <Text>
            After graduation, I explored the blockchain ecosystem by participating in renowned hackathons including ETH Global New York, ETH Global Metabolism, ETH Online 2022, and ETH Denver 2023. Notably, during ETH Global Metabolism, my team was awarded a prize by Filecoin for our innovative use of nft.storage, which leverages IPFS.
          </Text>
          <br />
          <Heading as="h3" fontSize="x-large" fontWeight="bold">Journey with RaidGuild</Heading>
          <Text>
            August 2022 was special. I teamed up with the folks at <span style={{fontWeight: "bold"}}>RaidGuild</span>. Moving from collaboration to full membership, it was a game-changer for my career. It was more than development; I learned the ins and outs of DAOs.
          </Text>
          <br />
          <Heading as="h3" fontSize="x-large" fontWeight="bold">AirSwap and Beyond</Heading>
          <Text>
            By Spring 2023, I joined the <span style={{fontWeight: "bold"}}>AirSwap</span> team. We&#39;re all about developer-focused solutions. Our main product? A decentralized exchange (DEX) that allows users to engage in server-based trading with professional market-makers. Additionally, we offer peer-to-peer OTC trades of ERC20 tokens. We&#39;re currently building an NFT marketplace and have a Voter Rewards staking app in the pipeline.
          </Text>
          <br />
        </Box>
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
      </Box>
    </>
  );
};

export default Welcome;
