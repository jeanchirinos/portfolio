import { css } from 'styled-components';
import media from '../style-guide/breakpoints';
import { fontSize } from '../style-guide/fontSize';

export default css`
  //* XS */
  ${media.xs} {
    --scrollbar_width: 10px;
    --header_height: 5.5rem;
    --margin-top: calc(var(--header_height) + 2rem);
    --margin-bottom: var(--header_height);
    --padding: 0.8rem;
    --100vw: calc(100vw - var(--padding) * 2 - var(--scrollbar_width));
    --sections_gap: calc(var(--header_height) * 2);
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
  ${media.sm} {
    --padding: 3rem;
  }

  //* MD */
  ${media.md} {
    --padding: 6rem;
  }

  //* LG */
  ${media.lg} {
    --margin-top: var(--header_height);
    --margin-bottom: 0;
    --padding: 2.5rem;
    --sections_gap: 0;
    --fs_1: ${fontSize._1};
    --fs_2: ${fontSize._2};
    --fs_3: ${fontSize._3};
    --fs_4: ${fontSize._4};
    --fs_5: ${fontSize._5};
    --fs_6: ${fontSize._6};
    --fs_7: ${fontSize._7};
  }

  //* XL */
  ${media.xl} {
    --padding: 8rem;
  }
`;
