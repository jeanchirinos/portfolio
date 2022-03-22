import { css } from 'styled-components';

export default css`
  body {
    background-color: var(--theme_500);
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
