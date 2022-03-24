import useSettings from 'src/features/settingsSlice';
import useTechnology from 'src/hooks/useTechnology';
import styled, { css } from 'styled-components';

export default function BigIsotype({ name }) {
  const [component, color] = useTechnology(name);
  const { mainTechSelected, setMainTechSelected } = useSettings();

  const active = name === mainTechSelected;

  function handleClick() {
    if (active) return;
    setMainTechSelected(name);
  }

  return (
    <StyledIsotype color={color} active={active} onClick={handleClick}>
      {component}
    </StyledIsotype>
  );
}

export const StyledIsotype = styled.svg(
  ({ active, color, activeColor }) => css`
    fill: var(--theme_400);
    cursor: pointer;
    transition: fill 0.3s, color 0.3s, transform 0.3s;
    width: 6.5rem;
    height: 6.5rem;

    :hover {
      transform: scale(1.1);
    }

    * {
      pointer-events: none;
    }

    ${active &&
    css`
      fill: ${color};
      color: ${activeColor ? activeColor : 'white'};
    `}
  `
);
