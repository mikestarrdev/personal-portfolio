import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "../../utils/projects";

const ProjectsGrid = () => {
  const renderProjects = projectDetails.map((project) => {
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
    <SimpleGrid columns={[1, 2, 2, 4]} spacing="1rem">
      {renderProjects}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
