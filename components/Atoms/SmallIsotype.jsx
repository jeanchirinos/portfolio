import styled from 'styled-components';
import useTechnology from 'src/hooks/useTechnology';
import { S_Isotype } from 'components/StyledComponents';

export default function SmallIsotype({ name }) {
  const { component, color } = useTechnology(name);

  const props = {
    color,
    viewBox: '0 0 104 104',
  };

  return <S_SmallIsotype {...props}>{component}</S_SmallIsotype>;
}

const S_SmallIsotype = styled(S_Isotype)`
  width: 1.3rem;
  height: 1.3rem;
`;
