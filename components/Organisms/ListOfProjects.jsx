import styled from 'styled-components';
// import { ProjectCard } from '..';
import { useEffect, useState } from 'react';
// import useSettings from '../../features/settingsSlice';
import projects from 'src/data/projects';
import mediaQueries from 'src/style-guide/breakpoints';
import ProjectCard from 'components/Molecules/ProjectCard';
import useSettings from 'src/features/settingsSlice';

export default function ListOfProjects() {
  const { activeTechs } = useSettings();

  function includesTechsSelected(project) {
    return activeTechs.every(activeTech =>
      project.technologies.includes(activeTech)
    );
  }

  function getProjectsGrid() {
    const filteredProjects = projects.filter(project =>
      includesTechsSelected(project)
    );

    const projectsToShow = filteredProjects.map(project => (
      <ProjectCard key={project.name} {...project} />
    ));

    return projectsToShow;
  }

  return <StyledListOfProjects>{getProjectsGrid()}</StyledListOfProjects>;
}

const StyledListOfProjects = styled.div`
  display: grid;

  ${mediaQueries.xs} {
    gap: 1rem;
    padding: 1rem 0;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
  }
  ${mediaQueries.md} {
    flex-grow: 1;
    gap: 2rem;
    padding: 2.5rem 0;
    grid-auto-rows: 25rem;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }

  ${mediaQueries.lg} {
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  }
`;
