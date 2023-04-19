import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { majorProjectDetails } from "../../utils/projects";

const ProjectsGrid = () => {
  const renderMajorProjects = majorProjectDetails.map((project) => {
    return (
      <GridItem key={project.title}>
        <ProjectCard
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          videoLink={project.videoLink}
          github={project.github}
          link={project.link}
          technologies={project.technologies}
        />
      </GridItem>
    );
  });

  return (
    <>
      <Heading
        as="h2"
        fontSize={"4xl"}
        fontWeight="regular"
        textAlign="center"
        mb="1.5rem"
        mt="0.5rem"
        id="projects"
      >
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={["1rem", "2rem"]}>
        {renderMajorProjects}
      </SimpleGrid>
    </>
  );
};

export default ProjectsGrid;
