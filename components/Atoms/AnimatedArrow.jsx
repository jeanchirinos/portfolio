import styled from 'styled-components';

export default function AnimatedArrow() {
  return (
    <StyledAnimatedArrow>
      <span></span>
      <span></span>
      {/* <span></span> */}
    </StyledAnimatedArrow>
  );
}

export const StyledAnimatedArrow = styled.div`
  /* position: absolute; */
  /* transform: rotate(270deg); */

  span {
    display: block;
    width: 25px;
    height: 25px;
    border-bottom: 5px solid var(--primary_500);
    border-right: 5px solid var(--primary_500);
    /* margin: -10px; */
    animation: animate 2s infinite;
  }

  span:nth-child(2) {
    animation-delay: -0.4s;
  }
  span:nth-child(3) {
    animation-delay: -0.6s;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(5px, 5px);
    }
  }
`;
