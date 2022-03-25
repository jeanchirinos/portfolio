import styled, { css } from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import { CgLock, CgLockUnlock } from 'react-icons/cg';

export default function ScrollToggle() {
  const { codeScrollIsActive, toggleCodeScroll } = useSettings();

  const component = codeScrollIsActive ? <CgLockUnlock /> : <CgLock />;

  const props = {
    codeScrollIsActive,
    onClick: toggleCodeScroll,
    title: 'Scroll !',
  };

  return <StyledScrollToggle {...props}>{component}</StyledScrollToggle>;
}

const StyledScrollToggle = styled.span(
  ({ codeScrollIsActive }) => css`
    display: flex;
    font-size: 1.3rem;
    position: absolute;
    color: ${codeScrollIsActive ? 'var(--primary_500)' : 'var(--opposite_400)'};
    top: 10px;
    right: 20px;
    cursor: pointer;
  `
);
