import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ProjectDetails } from "../../types/ProjectDetails";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  thumbnail,
  videoLink,
  github,
  link,
}: ProjectDetails) => {
  return (
    <Card h="full">
      <CardBody>
        <ProjectModal
          title={title}
          thumbnail={thumbnail || ""}
          videoLink={videoLink}
        />
        <Stack mt="6" spacing="3" minH="25vh">
          <Heading size="md">{title}</Heading>
          <Text>
            {description.substring(0, 75)}
            {description.length > 75 ? "..." : null}
          </Text>
          <Button variant="outline">More</Button>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={link} target="_blank">
            <Button variant="outline" colorScheme="blue">
              App
            </Button>
          </Link>
          <Link href={github} target="_blank">
            <Button variant="solid" colorScheme="blue">
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
