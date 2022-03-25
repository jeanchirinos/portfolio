import { green } from './colors';

const dark = {
  _100: '#6D6D6D',
  _200: '#5A5A5A',
  _300: '#484848',
  _400: '#353535',
  _500: '#222222',
  _600: '#1B1B1B',
  _700: '#141414',
  _800: '#0D0D0D',
  _900: '#070707',
  //
  scrollbar_thumb: 'rgba(255, 255, 255, 0.2)',
  font: '#C7D1CE',
  font_light: '#B9C6C3',
  toast_background: green._900,
  toast_color: green._300,
  project_card_shadow: '1px 4px 4px 1px rgba(0, 0, 0, 0.4)',
  code_editor_background: 'rgba(60, 60, 60, 0.3)',
};

const light = {
  _100: '#FCFBFB',
  _200: '#F9F7F8',
  _300: '#F5F3F4',
  _400: '#F2EFF1',
  _500: '#EFEBED',
  _600: '#D9D6D7',
  _700: '#C3C0C1',
  _800: '#ACABAC',
  _900: '#969596',
  //
  scrollbar_thumb: 'rgba(0, 0, 0, 0.2)',
  font: '#45544F',
  font_light: '#808080',
  toast_background: green._100,
  toast_color: green._700,
  project_card_shadow: '1px 4px 4px 1px rgba(194, 194, 194, 0.4)',
  code_editor_background: 'rgba(250, 250, 250, 0.8)',
};

export const darkTheme = {
  ...dark,
  opposite: {
    ...light,
  },
};

export const lightTheme = {
  ...light,
  opposite: {
    ...dark,
  },
};
