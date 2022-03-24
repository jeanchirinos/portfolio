import useTechnology from 'src/hooks/useTechnology';
import styled from 'styled-components';
import { StyledIsotype } from './BigIsotype';

export default function SmallIsotype({ name }) {
  const [component, color] = useTechnology(name);

  return (
    <StyledSmallIsotype color={color} viewBox="0 0 104 104">
      {component}
    </StyledSmallIsotype>
  );
}

const StyledSmallIsotype = styled(StyledIsotype)`
  fill: transparent;
  width: 1.3rem;
  height: 1.3rem;
  pointer-events: none;
`;
