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
    console.log('hey');
  }, [dispatch]);

  // if (typeof window !== 'undefined') {
  //   dispatch(getInitialMode());
  //   console.log('hola');
  // } else {
  //   console.log('adios');
  // }

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <>
      <GlobalStyles theme={theme} />
      <CustomToaster />
      {children}
    </>
  );
}
