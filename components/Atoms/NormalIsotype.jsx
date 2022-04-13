import { S_Isotype } from 'components/StyledComponents';
import useSettings from 'src/features/settingsSlice';
import useTechnology from 'components/Atoms/AllTechnologies';
import styled, { css } from 'styled-components';

export default function NormalIsotype({ name }) {
  const { component, color, activeColor } = useTechnology(name);
  const { activeTechs, setActiveTechs } = useSettings();

  const props = {
    color,
    active: activeTechs.includes(name),
    activeColor,
    viewBox: '0 0 104 104',
    onClick: () => setActiveTechs(name),
  };

  return <S_NormalIsotype {...props}>{component}</S_NormalIsotype>;
}

const S_NormalIsotype = styled.svg(
  ({ active, color, activeColor }) => css`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    fill: transparent;
    transition: fill 0.3s, color 0.3s, transform 0.3s;

    * {
      pointer-events: none;
    }

    @media (hover: hover) {
      :hover {
        transform: scale(1.1);
      }
    }

    ${active &&
    css`
      fill: ${color};
      color: ${activeColor || 'white'};
    `}
  `
);
