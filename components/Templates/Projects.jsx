import styled from 'styled-components';
import { Section } from 'components/StyledComponents';
import TechnologiesFilter from 'components/Organisms/TechnologiesFilter';
import ListOfProjects from 'components/Organisms/ListOfProjects';

export default function Projects() {
  return (
    <S_Projects>
      <h1>PROJECTS</h1>
      <TechnologiesFilter />
      <ListOfProjects />
    </S_Projects>
  );
}

const S_Projects = styled(Section)`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;
