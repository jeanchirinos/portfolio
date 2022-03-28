import styled from 'styled-components';
import projects from 'src/data/projects';
import media from 'src/style-guide/breakpoints';
import ProjectCard from 'components/Molecules/ProjectCard';
import useSettings from 'src/features/settingsSlice';

export default function ListOfProjects() {
  const { activeTechs } = useSettings();

  function includesTechsSelected(project) {
    return activeTechs.every(activeTech =>
      project.technologies.includes(activeTech)
    );
  }

  function getProjects() {
    const filteredProjects = projects.filter(project =>
      includesTechsSelected(project)
    );

    const projectsToShow = filteredProjects.map(project => (
      <ProjectCard key={project.name} {...project} />
    ));

    return projectsToShow;
  }

  return <StyledListOfProjects>{getProjects()}</StyledListOfProjects>;
}

const StyledListOfProjects = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-auto-rows: 20rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));

  ${media.sm} {
    grid-auto-rows: 23rem;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
`;
