import styled from 'styled-components';
import useTechnology from 'src/hooks/useTechnology';
import { StyledIsotype } from './BigIsotype';

export default function SmallIsotype({ name }) {
  const [component, color] = useTechnology(name);

  const props = {
    color,
    viewBox: '0 0 104 104',
  };

  return <StyledSmallIsotype {...props}>{component}</StyledSmallIsotype>;
}

const StyledSmallIsotype = styled(StyledIsotype)`
  width: 1.3rem;
  height: 1.3rem;
  cursor: default;
`;
