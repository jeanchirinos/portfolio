import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GlobalStyles from 'src/globalStyles';
import useSettings, { getInitialMode } from 'src/features/settingsSlice';
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
    <>
      <GlobalStyles theme={theme} />
      <CustomToaster />
      {children}
    </>
  );
}
