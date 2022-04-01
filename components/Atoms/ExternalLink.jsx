import styled from 'styled-components';

export default function ExternalLink({ children, link }) {
  return (
    <S_ExternalLink href={link} target="_blank">
      {children}
    </S_ExternalLink>
  );
}

export const S_ExternalLink = styled.a`
  color: gray;
  display: flex;
  font-size: 1.5rem;
  transition: color 0.3s;
  cursor: pointer;

  :hover {
    color: var(--opposite_600);
  }
`;
