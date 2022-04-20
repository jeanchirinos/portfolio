import styled, { css } from 'styled-components';

//* GENERAL
export const Container = styled.section`
  padding: 0 var(--padding);
`;

export const Section = styled(Container)`
  min-height: calc(100vh - var(--header_height));
`;

export const Flex = styled.article(
  ({
    column,
    fullCenter,
    justifyCenter,
    alignCenter,
    justify,
    align,
    $wrap,
    gap,
    columnGap,
    rowGap,
  }) => css`
    display: flex;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${$wrap && 'wrap'};

    gap: ${gap && `${gap}rem`};
    column-gap: ${columnGap && `${columnGap}rem`};
    row-gap: ${rowGap && `${rowGap}rem`};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);
