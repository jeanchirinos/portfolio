import { css } from 'styled-components';
import { fontFamily, fontWeight, lineHeight } from '../style-guide/font';

export const fontVars = css`
  /* LINE HEIGHTS */
  --lh_1: ${lineHeight._1};
  --lh_2: ${lineHeight._2};
  --lh_3: ${lineHeight._3};
  /* FONT WEIGHTS */
  --fw_black: ${fontWeight.black};
  --fw_bold: ${fontWeight.bold};
  --fw_regular: ${fontWeight.regular};
  --fw_light: ${fontWeight.light};
`;

export default css`
  //* DEFAULT  */
  body {
    color: var(--opposite_500);
    font-family: ${fontFamily.text};
    font-size: var(--fs_6);
    line-height: var(--lh_3);
    font-weight: var(--fw_regular);
  }

  //* HEADINGS */
  h1,
  h2,
  h3,
  h4 {
    font-family: ${fontFamily.heading};
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
`;
