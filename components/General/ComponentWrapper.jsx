import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'src/globalStyles';
import useSettings from 'src/features/settingsSlice';
import { getInitialMode } from 'src/features/settingsSlice';
import { darkTheme, lightTheme } from 'src/style-guide/themedColors';
import CustomToaster from 'components/Atoms/CustomToaster';

export default function ComponentWrapper({ children }) {
  const dispatch = useDispatch();
  const { darkMode } = useSettings();

  useEffect(() => {
    dispatch(getInitialMode());
  }, [dispatch]);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    darkTheme != null && (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
        <CustomToaster />
      </ThemeProvider>
    )
  );
}
