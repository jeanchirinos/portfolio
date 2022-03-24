import { green } from './colors';

const dark = {
  _100: '#808080',
  _200: '#6A696A',
  _300: '#545253',
  _400: '#3E3B3D',
  _500: '#222222',
  _600: '#201D1F',
  _700: '#181617',
  _800: '#100F0F',
  _900: '#080708',
  //
  scrollbar_thumb: 'rgba(255, 255, 255, 0.2)',
  font: '#C7D1CE',
  font_light: '#B9C6C3',
  toast_background: green._900,
  toast_color: green._300,
  project_card_shadow: '1px 4px 4px 1px rgba(0, 0, 0, 0.4)',
  code_editor_background: '#282C34',
};

const light = {
  _100: '#FCFBFB',
  _200: '#F9F7F8',
  _300: '#F5F3F4',
  _400: '#F2EFF1',
  _500: '#EFEBED',
  _600: '#D3D0D2',
  _700: '#B8B6B7',
  _800: '#9C9B9B',
  _900: '#808080',
  //
  scrollbar_thumb: 'rgba(0, 0, 0, 0.2)',
  font: '#45544F',
  font_light: '#808080',
  toast_background: green._100,
  toast_color: green._700,
  project_card_shadow: '1px 4px 4px 1px rgba(194, 194, 194, 0.4)',
  code_editor_background: '#F5F3F4',
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
