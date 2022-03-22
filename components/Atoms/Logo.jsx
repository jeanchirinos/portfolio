import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import SVGLogo from 'public/svg/Logo.svg';

export default function Logo() {
  function scrollToTop() {
    animateScroll.scrollToTop({ duration: 300 });
  }

  return <StyledLogo onClick={scrollToTop} />;
}

const StyledLogo = styled(SVGLogo)`
  color: var(--theme_500);
  width: 2.5rem;
  cursor: pointer;
`;
