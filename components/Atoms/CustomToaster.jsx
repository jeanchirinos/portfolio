import { Toaster } from 'react-hot-toast';

export default function CustomToaster() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: 'toaster fs-small fw-light ',
      }}
      containerStyle={{
        outlineColor: 'transparent',
      }}
    />
  );
}
