import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const OtherAdventures = () => {
  return (
    <Box
      pb="2rem"
      textAlign="center"
      w={["full", "full", "80%", "60%"]}
      m="auto"
    >
      <Heading as="h3" my="1rem">
        Other Adventures
      </Heading>
      <Text>
        In addition to coding and technology, I have dedicated an extraordinary
        amount of energy to technical mountain climbing, and I thoroughly enjoy
        scaling enormous peaks 🏔️.
      </Text>
      <br />
      <Text>
        When I&#39;m not coding or conquering mountains, I&#39;m exploring the
        world and immersing myself in new cultures. I&#39;ve set foot in over 35
        countries and spent a significant amount of time soaking up the vibes of
        Asia and Latin America.
      </Text>
      <br />
      <Text>
        But let&#39;s get real - nothing beats a delicious cup of coffee
        (aeropress is my go-to) and some scrumptious food. It&#39;s the simple
        pleasures in life that really get me going!
      </Text>
      <br />
      <Text>
        If you want to get in touch,
        <Link
          href="/contact"
          color="brand.accent"
          _dark={{ color: "neonYellow" }}
        >
          {" "}
          send me a message!
        </Link>
      </Text>
    </Box>
  );
};

export default OtherAdventures;
