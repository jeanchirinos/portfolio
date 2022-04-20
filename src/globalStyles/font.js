import { css } from 'styled-components';

export const fontVars = css`
  /* FONT FAMILY */
  --ff_heading: 'Raleway';
  --ff_text: 'Prompt';
  /* LINE HEIGHT */
  --lh_1: 130%;
  --lh_2: 150%;
  --lh_3: 170%;
  /* FONT WEIGHT */
  --fw_black: 900;
  --fw_bold: 700;
  --fw_regular: 400;
  --fw_light: 300;
`;

export default css`
  //* DEFAULT  */
  body {
    color: var(--font);
    font-family: var(--ff_text), sans-serif;
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: var(--fw_regular);
  }

  //* HEADINGS */
  h1,
  h2,
  h3,
  h4 {
    font-family: var(--ff_heading), sans-serif;
    line-height: var(--lh_1);
  }

  h2,
  h3,
  h4 {
    font-weight: var(--fw_bold);
  }

  h1 {
    font-weight: var(--fw_black);
    font-size: var(--fs_1);
  }
  h2 {
    font-size: var(--fs_2);
  }
  h3 {
    font-size: var(--fs_3);
  }
  h4 {
    font-size: var(--fs_4);
  }

  //* FONT SIZE */
  .fs-big {
    font-size: var(--fs_5);
    line-height: var(--lh_2);
  }
  .fs-small {
    font-size: var(--fs_7);
    line-height: var(--lh_3);
  }
  //* FONT WEIGHT */
  .fw-bold {
    font-weight: var(--fw_bold);
  }
  .fw-light {
    color: var(--font_light);
    font-weight: var(--fw_light);
  }
`;
