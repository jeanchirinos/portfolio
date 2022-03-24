import styled, { css } from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import { CgLock, CgLockUnlock } from 'react-icons/cg';

export default function ScrollToggle() {
  const { codeScroll, toggleCodeScroll } = useSettings();

  const scrollToggle = codeScroll ? <CgLockUnlock /> : <CgLock />;

  return (
    <StyledScrollToggle
      active={codeScroll}
      onClick={toggleCodeScroll}
      title="Scroll !"
    >
      {scrollToggle}
    </StyledScrollToggle>
  );
}

const StyledScrollToggle = styled.span(
  ({ active }) => css`
    display: flex;
    font-size: 1.3rem;
    position: absolute;
    color: ${active ? 'var(--primary_500)' : 'var(--opposite_400)'};
    top: 10px;
    right: 20px;
    cursor: pointer;
  `
);
