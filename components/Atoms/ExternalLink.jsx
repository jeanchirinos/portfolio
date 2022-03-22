import styled from 'styled-components';

export default function ExternalLink({ children, link }) {
  return (
    <StyledExternalLink href={link} target="_blank">
      {children}
    </StyledExternalLink>
  );
}

export const StyledExternalLink = styled.a`
  color: gray;
  display: flex;
  font-size: 1.5rem;
  transition: color 0.3s;

  :hover {
    color: var(--opposite_600);
  }
`;
