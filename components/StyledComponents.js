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
  }) => css`
    display: flex;

    flex-direction: ${column && 'column'};

    justify-content: ${justifyCenter && 'center'};
    align-items: ${alignCenter && 'center'};

    justify-content: ${justify};
    align-items: ${align};

    flex-wrap: ${$wrap && 'wrap'};
    gap: ${`${gap}rem`};

    ${fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
);

//* SPECIFIC
export const S_Isotype = styled.svg`
  fill: transparent;
  transition: fill 0.3s, color 0.3s, transform 0.3s;

  * {
    pointer-events: none;
  }

  @media (hover: hover) {
    :hover {
      transform: scale(1.1);
    }
  }
`;
