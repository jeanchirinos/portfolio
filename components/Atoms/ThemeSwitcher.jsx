import styled, { css } from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export default function ThemeSwitcher() {
  const { darkMode, toggleDarkMode } = useSettings();

  return (
    <StyledModeSwitcher
      active={darkMode}
      onClick={toggleDarkMode}
      title="Cambia el tema"
    >
      <HiOutlineMoon />
      <HiOutlineSun />
    </StyledModeSwitcher>
  );
}

const StyledModeSwitcher = styled.div(
  ({ active }) => css`
    background-color: ${active ? 'var(--primary_500)' : 'var(--light_800)'};
    color: white;
    width: 48px;
    height: 28px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0 5px;
    position: relative;

    :after {
      content: '';
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: var(--theme_500);
      position: absolute;
      left: 3px;
      transform: ${active && 'translateX(24px)'};
      transition: transform 0.5s;
    }

    svg {
      width: 0.9rem;
    }
  `
);
