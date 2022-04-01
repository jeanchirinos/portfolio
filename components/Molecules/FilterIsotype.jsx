import NormalIsotype from 'components/Atoms/NormalIsotype';
import styled from 'styled-components';

export default function FilterIsotype({ name, fullName }) {
  const title = fullName || name;

  return (
    <S_FilterIsotype title={title}>
      <NormalIsotype name={name} />
      <p className="fs-small fw-light">{name}</p>
    </S_FilterIsotype>
  );
}

const S_FilterIsotype = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;

  p {
    user-select: none;
  }
`;
