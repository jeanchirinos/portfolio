import { css } from 'styled-components';

const themedColors = theme => css`
  --theme_100: ${theme._100};
  --theme_200: ${theme._200};
  --theme_300: ${theme._300};
  --theme_400: ${theme._400};
  --theme_500: ${theme._500};
  --theme_600: ${theme._600};
  --theme_700: ${theme._700};
  --theme_800: ${theme._800};
  --theme_900: ${theme._900};

  --opposite_100: ${theme.opposite._100};
  --opposite_200: ${theme.opposite._200};
  --opposite_300: ${theme.opposite._300};
  --opposite_400: ${theme.opposite._400};
  --opposite_500: ${theme.opposite._500};
  --opposite_600: ${theme.opposite._600};
  --opposite_700: ${theme.opposite._700};
  --opposite_800: ${theme.opposite._800};
  --opposite_900: ${theme.opposite._900};

  /*  */
  --scrollbar_thumb: ${theme.scrollbar_thumb};
  --font: ${theme.font};
  --font_light: ${theme.font_light};
  --toast_background: ${theme.toast_background};
  --toast_color: ${theme.toast_color};
  --project_card_shadow: ${theme.project_card_shadow};
`;

export default themedColors;
