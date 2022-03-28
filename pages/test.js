import CodeContent from 'components/Molecules/CodeContent';
import styled from 'styled-components';

export default function test() {
  return (
    <StyledWrapper>
      {/* <div>
        ¡Hola <span>mundo</span>
      </div>
      <div>¡Hola mundo</div> */}
      <CodeContent.React />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  div {
    white-space: nowrap;
    width: 100%;
    animation: typing 5s;
    overflow: hidden;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
`;
