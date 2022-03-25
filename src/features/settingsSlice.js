import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

//* INITIAL STATE
const initialState = {
  darkMode: null,
  mainTechSelected: 'React',
  codeScrollIsActive: false,
  activeTechs: ['React'],
};

//* SLICE
const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    getInitialMode: s => {
      if (localStorage.darkMode) {
        s.darkMode = JSON.parse(localStorage.darkMode);
      } else {
        s.darkMode = true;
        localStorage.darkMode = true;
      }

      setTimeout(() => {
        document.body.style.transition = 'background-color 0.5s';
      }, 1000);
    },
    toggleDarkMode: s => {
      s.darkMode = !s.darkMode;
      localStorage.darkMode = s.darkMode;
    },
    setMainTechSelected: (s, { payload }) => {
      s.mainTechSelected = payload;
    },
    toggleCodeScroll: s => {
      s.codeScrollIsActive = !s.codeScrollIsActive;
    },
    setActiveTechs: (s, { payload }) => {
      const techIndex = s.activeTechs.indexOf(payload);
      const techIsNotInTheList = techIndex === -1;

      if (techIsNotInTheList) {
        s.activeTechs.push(payload);
      } else {
        s.activeTechs.splice(techIndex, 1);
      }
    },
  },
});

//* DATA
//? States
const darkMode = s => s.settings.darkMode;
const mainTechSelected = s => s.settings.mainTechSelected;
const codeScrollIsActive = s => s.settings.codeScrollIsActive;
const activeTechs = s => s.settings.activeTechs;

//? Actions
export const {
  getInitialMode,
  toggleDarkMode,
  setMainTechSelected,
  toggleCodeScroll,
  setActiveTechs,
} = settingsSlice.actions;

//? Reducer
export const settingsReducer = settingsSlice.reducer;

//* HOOK
export default function useSettings() {
  const dispatch = useDispatch();

  return {
    darkMode: useSelector(darkMode),
    mainTechSelected: useSelector(mainTechSelected),
    codeScrollIsActive: useSelector(codeScrollIsActive),
    activeTechs: useSelector(activeTechs),
    toggleDarkMode: () => dispatch(toggleDarkMode()),
    setMainTechSelected: payload => dispatch(setMainTechSelected(payload)),
    toggleCodeScroll: () => dispatch(toggleCodeScroll()),
    setActiveTechs: payload => dispatch(setActiveTechs(payload)),
  };
}
