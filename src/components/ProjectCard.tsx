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
import { MainProjectDetails } from "../../types/ProjectDetails";
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
  SiNextdotjs,
  SiStorybook,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  videoLink,
  github,
  link,
  technologies,
}: MainProjectDetails) => {
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
      case "Next.js":
        icon = <SiNextdotjs />;
        break;
      case "REST API":
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
      case "storybook":
        icon = <SiStorybook />;
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
      }}
    >
      <CardBody>
        <Stack spacing="3" overflowY="scroll">
          <Heading as="h2" fontSize={["2xl"]} textAlign="center">
            {title}
          </Heading>
          {thumbnail && (
            <ProjectModal
              title={title}
              thumbnail={thumbnail || ""}
              videoLink={videoLink}
            />
          )}

          <Text>{description}</Text>
          <Heading as="h1" fontSize="md">
            Technologies:
          </Heading>
          <HStack>{renderIcons(technologies)}</HStack>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" w="full">
          <Box w="50%">
            <Link href={link} target="_blank">
              <Button variant="links" size="sm" w="full">
                <Text mr="1">App</Text> <RxOpenInNewWindow />
              </Button>
            </Link>
          </Box>
          <Box w="50%">
            {github ? (
              <Link href={github} target="_blank">
                <Button variant="links" size="sm" w="full">
                  <FaGithub />
                  <Text ml={1}>GitHub</Text>
                </Button>
              </Link>
            ) : (
              <Button variant="links" size="sm" w="full">
                (Closed-Source)
              </Button>
            )}
          </Box>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
