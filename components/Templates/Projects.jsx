import styled from 'styled-components';
import { Section } from 'components/StyledComponents';
import TechnologiesFilter from 'components/Organisms/TechnologiesFilter';
import ListOfProjects from 'components/Organisms/ListOfProjects';

export default function Projects() {
  return (
    <StyledProjects>
      <h1>PROJECTS</h1>
      <TechnologiesFilter />
      <ListOfProjects />
    </StyledProjects>
  );
}

const StyledProjects = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
