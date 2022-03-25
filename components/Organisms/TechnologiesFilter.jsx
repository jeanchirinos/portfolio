import technologies from 'components/Atoms/AllTechnologies';
import FilterIsotype from 'components/Molecules/FilterIsotype';
import styled from 'styled-components';

export default function TechnologiesFilter() {
  return (
    <StyledFilterIsotypes>
      {technologies.map(tech => (
        <FilterIsotype key={tech.name} {...tech} />
      ))}
    </StyledFilterIsotypes>
  );
}

const StyledFilterIsotypes = styled.div`
  width: var(--100vw);
  padding: 1rem 0;
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
`;
