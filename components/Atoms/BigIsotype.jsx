import { S_Isotype } from 'components/StyledComponents';
import useSettings from 'src/features/settingsSlice';
import useTechnology from 'src/hooks/useTechnology';
import styled, { css } from 'styled-components';

export default function BigIsotype({ name }) {
  const { component, color } = useTechnology(name);
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

  return <S_BigIsotype {...props}>{component}</S_BigIsotype>;
}

export const S_BigIsotype = styled(S_Isotype)(
  ({ active, color }) => css`
    width: 6.5rem;
    height: 6.5rem;
    cursor: pointer;

    ${active &&
    css`
      fill: ${color};
      color: white;
      pointer-events: none;
    `}
  `
);
