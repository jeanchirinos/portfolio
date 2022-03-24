import NormalIsotype from 'components/Atoms/NormalIsotype';
import styled from 'styled-components';

export default function FilterIsotype({ name, fullName }) {
  return (
    <StyledFilterIsotype title={fullName || name}>
      <NormalIsotype name={name} />
      <p className="fs-small fw-light">{name}</p>
    </StyledFilterIsotype>
  );
}

const StyledFilterIsotype = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    user-select: none;
  }
`;
