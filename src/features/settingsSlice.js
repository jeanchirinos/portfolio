import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

//* INITIAL STATE
const initialState = {
  darkMode: null,
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
  },
});

//* DATA
//? States
const darkMode = s => s.settings.darkMode;

//? Actions
export const { getInitialMode, toggleDarkMode } = settingsSlice.actions;

//? Reducer
export const settingsReducer = settingsSlice.reducer;

//* HOOK
export default function useSettings() {
  const dispatch = useDispatch();

  return {
    darkMode: useSelector(darkMode),
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  };
}
