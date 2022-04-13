import styled from 'styled-components';
import media from 'src/style-guide/breakpoints';
import useSettings from 'src/features/settingsSlice';
import projects from 'src/data/projects';
import ProjectCard from 'components/Molecules/ProjectCard';

export default function ListOfProjects() {
  const { activeTechs } = useSettings();

  function includesTechsSelected(project) {
    return activeTechs.every(activeTech =>
      project.technologies.includes(activeTech)
    );
  }

  const projectsGrid = projects
    .filter(project => includesTechsSelected(project))
    .map(project => <ProjectCard key={project.name} {...project} />);

  return <S_ListOfProjects>{projectsGrid}</S_ListOfProjects>;
}

const S_ListOfProjects = styled.div`
  display: grid;
  grid-auto-rows: 20rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
  gap: 1.5rem;

  ${media.sm} {
    grid-auto-rows: 23rem;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  }
`;
