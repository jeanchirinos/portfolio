import styled, { css } from 'styled-components';

export const Flex = styled.article(
  ({
    column,
    fullCenter,
    justifyCenter,
    alignCenter,
    justify,
    align,
    noWrap,
    gap,
  }) => css`
    display: flex;
    flex-wrap: wrap;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${noWrap && 'nowrap'};
    gap: ${gap};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);
