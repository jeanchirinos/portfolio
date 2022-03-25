import useSettings from 'src/features/settingsSlice';
import useTechnology from 'src/hooks/useTechnology';
import mediaQueries from 'src/style-guide/breakpoints';
import styled, { css } from 'styled-components';

export default function BigIsotype({ name }) {
  const [component, color] = useTechnology(name);
  const { mainTechSelected, setMainTechSelected } = useSettings();

  function handleClick() {
    if (props.active) return;
    setMainTechSelected(name);
  }

  const props = {
    color,
    active: name === mainTechSelected,
    onClick: handleClick,
  };

  return <StyledIsotype {...props}>{component}</StyledIsotype>;
}

export const StyledIsotype = styled.svg(
  ({ active, color, activeColor }) => css`
    fill: transparent;
    width: 6.5rem;
    height: 6.5rem;
    transition: fill 0.3s, color 0.3s, transform 0.3s;
    cursor: pointer;

    * {
      pointer-events: none;
    }

    ${active &&
    css`
      fill: ${color};
      color: ${activeColor || 'white'};
    `}

    ${mediaQueries.md} {
      :hover {
        transform: scale(1.1);
      }
    }
  `
);
