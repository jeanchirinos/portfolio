import { css } from 'styled-components';
import { primary, blue, green, red, yellow } from '../style-guide/colors';
import { darkTheme, lightTheme } from '../style-guide/themedColors';

export default css`
  --primary_100: ${primary._100};
  --primary_200: ${primary._200};
  --primary_300: ${primary._300};
  --primary_400: ${primary._400};
  --primary_500: ${primary._500};
  --primary_600: ${primary._600};
  --primary_700: ${primary._700};
  --primary_800: ${primary._800};
  --primary_900: ${primary._900};

  --dark_100: ${darkTheme._100};
  --dark_200: ${darkTheme._200};
  --dark_300: ${darkTheme._300};
  --dark_400: ${darkTheme._400};
  --dark_500: ${darkTheme._500};
  --dark_600: ${darkTheme._600};
  --dark_700: ${darkTheme._700};
  --dark_800: ${darkTheme._800};
  --dark_900: ${darkTheme._900};

  --light_100: ${lightTheme._100};
  --light_200: ${lightTheme._200};
  --light_300: ${lightTheme._300};
  --light_400: ${lightTheme._400};
  --light_500: ${lightTheme._500};
  --light_600: ${lightTheme._600};
  --light_700: ${lightTheme._700};
  --light_800: ${lightTheme._800};
  --light_900: ${lightTheme._900};

  --blue_100: ${blue._100};
  --blue_200: ${blue._200};
  --blue_300: ${blue._300};
  --blue_400: ${blue._400};
  --blue_500: ${blue._500};
  --blue_600: ${blue._600};
  --blue_700: ${blue._700};
  --blue_800: ${blue._800};
  --blue_900: ${blue._900};

  --green_100: ${green._100};
  --green_200: ${green._200};
  --green_300: ${green._300};
  --green_400: ${green._400};
  --green_500: ${green._500};
  --green_600: ${green._600};
  --green_700: ${green._700};
  --green_800: ${green._800};
  --green_900: ${green._900};

  --red_100: ${red._100};
  --red_200: ${red._200};
  --red_300: ${red._300};
  --red_400: ${red._400};
  --red_500: ${red._500};
  --red_600: ${red._600};
  --red_700: ${red._700};
  --red_800: ${red._800};
  --red_900: ${red._900};

  --yellow_100: ${yellow._100};
  --yellow_200: ${yellow._200};
  --yellow_300: ${yellow._300};
  --yellow_400: ${yellow._400};
  --yellow_500: ${yellow._500};
  --yellow_600: ${yellow._600};
  --yellow_700: ${yellow._700};
  --yellow_800: ${yellow._800};
  --yellow_900: ${yellow._900};
`;
