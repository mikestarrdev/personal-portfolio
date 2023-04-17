import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ProjectDetails } from "../../types/ProjectDetails";
import { FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiChakraui,
  SiGraphql,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  videoLink,
  github,
  link,
  technologies,
}: ProjectDetails) => {
  // pass techIcon indo renderIcons
  const techIcon = (technology: string) => {
    let icon;
    switch (technology) {
      case "TypeScript":
        icon = <SiTypescript />;
        break;
      case "JavaScript":
        icon = <SiJavascript />;
        break;
      case "Node.js":
        icon = <SiNodedotjs />;
        break;
      case "React":
        icon = <SiReact />;
        break;
      case "REST":
        icon = <AiOutlineApi />;
        break;
      case "TailwindCSS":
        icon = <SiTailwindcss />;
        break;
      case "Chakra-UI":
        icon = <SiChakraui />;
        break;
      case "GraphQL":
        icon = <SiGraphql />;
        break;
      case "Vercel":
        icon = <SiVercel />;
        break;
    }
    return icon;
  };

  const renderIcons = (technologies: string[]) =>
    technologies?.map((tech) => {
      return (
        <Tooltip label={tech} key={tech} hasArrow>
          <Box>{techIcon(tech)}</Box>
        </Tooltip>
      );
    });

  return (
    <Card
      h="full"
      _dark={{
        bg: "black",
        border: "solid 1px white",
        shadow: "1px 1px 1px white",
      }}
    >
      <CardBody>
        <ProjectModal
          title={title}
          thumbnail={thumbnail || ""}
          videoLink={videoLink}
        />

        <Stack
          mt="6"
          spacing="3"
          // minH="25vh"
          overflowY="scroll"
        >
          <Heading as="h2" size="lg" textAlign="center">
            {title}
          </Heading>
          <Text>{description}</Text>
          <Heading as="h1" fontSize="md">
            Technologies:
          </Heading>
          <HStack>{renderIcons(technologies)}</HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={link} target="_blank">
            <Button colorScheme="black">App</Button>
          </Link>
          <Link href={github} target="_blank">
            <Button colorScheme="black">
              <FaGithub />
              <Text ml={1}>GitHub</Text>
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
