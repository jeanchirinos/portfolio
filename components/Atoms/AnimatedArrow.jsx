import styled from 'styled-components';

export default function AnimatedArrow() {
  return <StyledAnimatedArrow />;
}

export const StyledAnimatedArrow = styled.span`
  transform: rotate(45deg);

  :after {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border-bottom: 5px solid var(--primary_500);
    border-right: 5px solid var(--primary_500);
    animation: animate 2s infinite;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(5px, 5px);
    }
  }
`;
