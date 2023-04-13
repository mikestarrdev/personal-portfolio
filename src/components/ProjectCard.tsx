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
import React from "react";
import { ProjectDetails } from "../../types/ProjectDetails";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  link,
}: ProjectDetails) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={`${title} screenshot`} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="base">
            GitHub: {github}
          </Text>
          <Text color="blue.600" fontSize="base">
            App: {link}
          </Text>
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
            <Button variant="outline" colorScheme="blue">
              GitHub
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
