import { technologies } from 'components/Atoms/AllTechnologies';
import FilterIsotype from 'components/Molecules/FilterIsotype';
import styled from 'styled-components';

export default function TechnologiesFilter() {
  return (
    <S_TechnologiesFilter>
      {technologies.map(tech => (
        <FilterIsotype key={tech.name} {...tech} />
      ))}
    </S_TechnologiesFilter>
  );
}

const S_TechnologiesFilter = styled.div`
  width: var(--100vw);
  display: flex;
  column-gap: 1.5rem;
  overflow-x: auto;
  padding: 0.2rem 0;
`;
