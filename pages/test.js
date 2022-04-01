import styled from 'styled-components';
import { useTheme } from 'styled-components';

export default function Test() {
  const theme = useTheme();

  return (
    <StyledWrapper>
      <button onClick={() => console.log(theme)}>Click</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;
