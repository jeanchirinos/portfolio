import { createGlobalStyle, css } from 'styled-components';
import colors from './colors';
import themedColors from './themedColors';
import font, { fontVars } from './font';
import mediaQueries from './mediaQueries';
import extra from './extra';
import '@fontsource/raleway/900.css';
import '@fontsource/raleway/700.css';
import '@fontsource/prompt/400.css';
import '@fontsource/prompt/300.css';

export default createGlobalStyle(
  ({ theme }) => css`
    //* RESET */
    *,
    :before,
    :after {
      box-sizing: border-box;
      margin: 0;
      /* outline: 1px solid rgba(219, 112, 147, 0.3); */
    }

    //* CSS VARS */
    :root {
      ${colors}
      ${themedColors(theme)}
      ${fontVars}
    }

    //* MEDIA QUERIES */
    html {
      ${mediaQueries}
    }

    //* ELEMENTS, CLASSES */
    ${font}
    ${extra}
  `
);
