import useSettings from 'src/features/settingsSlice';
import useTechnology from 'src/hooks/useTechnology';
import styled from 'styled-components';
import { StyledIsotype } from './BigIsotype';

export default function NormalIsotype({ name }) {
  const [component, color, activeColor] = useTechnology(name);
  const { activeTechs, setActiveTechs } = useSettings();

  const active = activeTechs.includes(name);

  return (
    <StyledNormalIsotype
      color={color}
      active={active}
      onClick={() => setActiveTechs(name)}
      activeColor={activeColor}
      viewBox="0 0 104 104"
    >
      {component}
    </StyledNormalIsotype>
  );
}

const StyledNormalIsotype = styled(StyledIsotype)`
  width: 3rem;
  height: 3rem;
`;
