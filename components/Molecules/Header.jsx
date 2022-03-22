import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import ThemeSwitcher from 'components/Atoms/ThemeSwitcher';
import GithubLink from 'components/Atoms/GithubLink';
import { Flex } from 'components/StyledComponents';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Flex alignCenter gap="1.5rem">
        <ThemeSwitcher />
        <GithubLink link="https://github.com/jeanchirinos/portfolio" />
      </Flex>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  backdrop-filter: blur(4px);
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
`;
