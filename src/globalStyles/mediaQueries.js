import { css } from 'styled-components';
import mediaQueries from '../style-guide/breakpoints';
import { fontSize } from '../style-guide/font';

export default css`
  //* XS */
  ${mediaQueries.xs} {
    --header_height: 5rem;
    --padding: 0.5rem;
    --sections_gap: calc(var(--header_height) * 2);
    --margin_top: calc(var(--header_height) + 2rem);
    --100vw: calc(100vw - var(--padding) * 2 - 10px);
    //*? FONT SIZE */
    --fs_1: ${fontSize._2};
    --fs_2: ${fontSize._3};
    --fs_3: ${fontSize._4};
    --fs_4: ${fontSize._5};
    --fs_5: ${fontSize._6};
    --fs_6: ${fontSize._7};
    --fs_7: ${fontSize._8};
  }

  //* SM */
  ${mediaQueries.sm} {
    --padding: 1rem;
  }

  //* MD */
  ${mediaQueries.md} {
    --padding: 2rem;
  }

  //* LG */
  ${mediaQueries.lg} {
    --sections_gap: 0;
    --padding: 2.5rem;
    --margin_top: var(--header_height);
    --fs_1: ${fontSize._1};
    --fs_2: ${fontSize._2};
    --fs_3: ${fontSize._3};
    --fs_4: ${fontSize._4};
    --fs_5: ${fontSize._5};
    --fs_6: ${fontSize._6};
    --fs_7: ${fontSize._7};
  }

  //* XL */
  ${mediaQueries.xl} {
    --padding: 4rem;
  }
`;
