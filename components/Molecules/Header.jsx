import styled from 'styled-components';
import Logo from 'components/Atoms/Logo';
import ThemeSwitcher from 'components/Atoms/ThemeSwitcher';
import GithubLink from 'components/Atoms/GithubLink';
import { Container, Flex } from 'components/StyledComponents';
import projects from 'src/data/projects';

export default function Header() {
  return (
    <S_Header as="header">
      <Logo />
      <Flex alignCenter columnGap={2}>
        <ThemeSwitcher />
        <GithubLink link={projects[0].githubLink} />
      </Flex>
    </S_Header>
  );
}

const S_Header = styled(Container)`
  backdrop-filter: blur(4px);
  width: 100%;
  height: var(--header_height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9;
`;
