import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import SVGLogo from 'public/static/svg/Logo.svg';

export default function Logo() {
  function scrollToTop() {
    animateScroll.scrollToTop({ duration: 300 });
  }

  return <S_Logo onClick={scrollToTop} />;
}

const S_Logo = styled(SVGLogo)`
  color: var(--theme_500);
  cursor: pointer;
`;
