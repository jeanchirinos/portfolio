import { css } from 'styled-components';

export default css`
  body {
    background-color: var(--theme_500);
  }

  #__next {
    margin-top: 4rem;
    display: grid;
    gap: var(--sections_gap);
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
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar_thumb);
    border-radius: 10px;
  }
`;
