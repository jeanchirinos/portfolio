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
    c_gap,
    r_gap,
  }) => css`
    display: flex;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${$wrap && 'wrap'};

    gap: ${gap && `${gap}rem`};
    column-gap: ${c_gap && `${c_gap}rem`};
    row-gap: ${r_gap && `${c_gap}rem`};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);
