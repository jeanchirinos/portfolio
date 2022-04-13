import { css } from 'styled-components';
import { darkTheme, lightTheme } from '../style-guide/themedColors';

export default css`
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

  --blue_100: #e3edf7;
  --blue_200: #c8dbef;
  --blue_300: #acc9e7;
  --blue_400: #90b8df;
  --blue_500: #75a6d7;
  --blue_600: #4185c8;
  --blue_700: #2d639a;
  --blue_800: #1e4267;
  --blue_900: #0f2133;

  --green_100: #e3f7f0;
  --green_200: #c8efe2;
  --green_300: #ace7d3;
  --green_400: #90dfc5;
  --green_500: #75d7b6;
  --green_600: #41c89b;
  --green_700: #2d9a76;
  --green_800: #1e674e;
  --green_900: #0f3327;

  --red_100: #fbd7dd;
  --red_200: #f6aeba;
  --red_300: #f28698;
  --red_400: #ed5d75;
  --red_500: #d77575;
  --red_600: #c84141;
  --red_700: #9a2d2d;
  --red_800: #671e1e;
  --red_900: #330f0f;

  --yellow_100: #fbfbe0;
  --yellow_200: #f6f6c1;
  --yellow_300: #f2f2a1;
  --yellow_400: #eded82;
  --yellow_500: #e9e963;
  --yellow_600: #e0e029;
  --yellow_700: #aeae19;
  --yellow_800: #747411;
  --yellow_900: #3a3a08;

  --primary_100: var(--green_100);
  --primary_200: var(--green_200);
  --primary_300: var(--green_300);
  --primary_400: var(--green_400);
  --primary_500: var(--green_500);
  --primary_600: var(--green_600);
  --primary_700: var(--green_700);
  --primary_800: var(--green_800);
  --primary_900: var(--green_900);
`;
