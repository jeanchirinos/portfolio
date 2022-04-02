import { css } from 'styled-components';

export default css`
  body {
    visibility: hidden;
    background-color: var(--theme_500);
  }

  #__next {
    display: grid;
    row-gap: var(--sections_gap);
    padding-top: var(--margin-top);
    padding-bottom: var(--margin-bottom);
  }

  .toaster {
    background-color: var(--toast_background);
    color: var(--toast_color);
  }

  ::selection {
    background-color: var(--primary_500);
    color: var(--light_100);
  }

  ::-webkit-scrollbar {
    background-color: var(--theme_500);
    width: var(--scrollbar_width);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar_thumb);
    border-radius: var(--scrollbar_width);
  }
`;
