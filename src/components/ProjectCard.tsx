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
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { MajorProjectDetails } from "../../types/ProjectDetails";
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
  SiStyledcomponents,
} from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import ProjectModal from "./ProjectModal";
import { BsArrowRightShort } from "react-icons/bs";
import { Languages } from "../../types/technologies";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  videoLink,
  github,
  link,
  technologies,
  contributions,
}: MajorProjectDetails) => {
  const techIcon = (technology: Languages) => {
    let icon;
    switch (technology) {
      case Languages.TypeScript:
        icon = <SiTypescript size="lg" />;
        break;
      case Languages.JavaScript:
        icon = <SiJavascript size="lg" />;
        break;
      case Languages.NodeJs:
        icon = <SiNodedotjs size="lg" />;
        break;
      case Languages.React:
        icon = <SiReact size="lg" />;
        break;
      case Languages.NextJs:
        icon = <SiNextdotjs size="lg" />;
        break;
      case Languages.RestApi:
        icon = <AiOutlineApi size="lg" />;
        break;
      case Languages.TailwindCSS:
        icon = <SiTailwindcss size="lg" />;
        break;
      case Languages.ChakraUI:
        icon = <SiChakraui size="lg" />;
        break;
      case Languages.GraphQL:
        icon = <SiGraphql size="lg" />;
        break;
      case Languages.Vercel:
        icon = <SiVercel size="lg" />;
        break;
      case Languages.Storybook:
        icon = <SiStorybook size="lg" />;
      break;
      case Languages.StyledComponents:
        icon = <SiStyledcomponents size="lg" />;
      break;
    }
    return icon;
  };

  const renderContributions = (contributions: string[]) => {
    return contributions?.map((contribution) => (
      <ListItem key={contribution}>
        <ListIcon as={BsArrowRightShort} />
        {contribution}
      </ListItem>
    ));
  };

  const renderIcons = (technologies: Languages[]) =>
  technologies.map((tech) => {
    const iconElement = techIcon(tech);
    return (
      <Tooltip label={tech} key={tech} hasArrow>
        <Box w="1.5rem" h="1.5rem">{iconElement}</Box>
      </Tooltip>
    );
  });


  return (
    <Card>
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
          {videoLink && (
            <Text textAlign="center" fontSize="sm" fontWeight="bold">
              (Click thumbnail to watch video demo)
            </Text>
          )}
          <Heading as="h4" fontSize="base" fontWeight="bold">
            Description:
          </Heading>
          <Text>{description}</Text>
          <Box>
            {contributions && <List>{renderContributions(contributions)}</List>}
          </Box>

          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Technologies:
          </Heading>
          <HStack>{renderIcons(technologies)}</HStack>
        </Stack>
      </CardBody>
      <Divider w="90%" />
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
