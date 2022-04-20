import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

export default function CustomToaster() {
  const props = {
    position: 'bottom-center',
    toastOptions: { className: 'toaster fs-small fw-light' },
    containerStyle: { outlineColor: 'transparent' },
  };

  return <Hola {...props} />;
}

const Hola = styled(Toaster)`
  div {
    color: red !important;
  }
`;
