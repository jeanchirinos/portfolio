import media from 'src/style-guide/breakpoints';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export default function AnimatedArrow() {
  return (
    <S_Wrapper>
      <S_AnimatedArrow />
    </S_Wrapper>
  );
}
const S_Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.lg} {
    flex-direction: column;
  }
`;

const animate = angle => keyframes`
    0% {
      transform: ${`rotate(${angle}deg)`};
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: ${`rotate(${angle}deg)`} translate(5px, 5px) ;
    }
`;

const S_AnimatedArrow = styled.div`
  width: 25px;
  height: 25px;
  border-bottom: 5px solid var(--primary_500);
  border-right: 5px solid var(--primary_500);
  animation-name: ${animate(45)};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  ${media.lg} {
    animation-name: ${animate(-45)};
  }
`;
