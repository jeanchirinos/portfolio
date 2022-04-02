import styled from 'styled-components';

export default function Test() {
  return (
    <S_Wrapper>
      <h1>a</h1>
    </S_Wrapper>
  );
}

const S_Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  visibility: hidden;
  transition: background-color 0.5s;
  /* background-color: var(--holo); */
`;
