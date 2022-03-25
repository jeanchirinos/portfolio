import { Toaster } from 'react-hot-toast';

export default function CustomToaster() {
  const props = {
    position: 'bottom-center',
    toastOptions: { className: 'toaster fs-small fw-light' },
    containerStyle: { outlineColor: 'transparent' },
  };

  return <Toaster {...props} />;
}
