import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectDetails } from "../../utils/projects";

const ProjectsGrid = () => {
  return (
    <SimpleGrid columns={[2, 2, 2, 4]} border="1px">
      <GridItem>
        <ProjectCard
          title={projectDetails.kaching.title}
          description={projectDetails.kaching.description}
          image={projectDetails.kaching.image}
          github={projectDetails.kaching.github}
          link={projectDetails.kaching.link}
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title={projectDetails.rom.title}
          description={projectDetails.rom.description}
          image={projectDetails.rom.image}
          github={projectDetails.rom.github}
          link={projectDetails.rom.link}
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title={projectDetails.wrapeth.title}
          description={projectDetails.wrapeth.description}
          image={projectDetails.wrapeth.image}
          github={projectDetails.wrapeth.github}
          link={projectDetails.wrapeth.link}
        />
      </GridItem>
      <GridItem>
        <ProjectCard
          title={projectDetails.octav3.title}
          description={projectDetails.octav3.description}
          image={projectDetails.octav3.image}
          github={projectDetails.octav3.github}
          link={projectDetails.octav3.link}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default ProjectsGrid;
