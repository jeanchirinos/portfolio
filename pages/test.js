import styled from 'styled-components';
import { useTheme } from 'styled-components';

export default function Test() {
  const theme = useTheme();

  return (
    <S_Wrapper>
      <button onClick={() => console.log(theme)}>Click</button>
    </S_Wrapper>
  );
}

const S_Wrapper = styled.div``;
