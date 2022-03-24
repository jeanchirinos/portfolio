import CopyToClipboard from 'react-copy-to-clipboard';
import { MdMail } from 'react-icons/md';
import toast from 'react-hot-toast';
import { StyledExternalLink } from './ExternalLink';
import personalInfo from 'src/data/personalInfo';

export default function EmailLink() {
  function handleCopy() {
    toast('Email copied', { icon: '📩' });
  }

  return (
    <CopyToClipboard text={personalInfo.email} onCopy={handleCopy}>
      <StyledExternalLink>
        <MdMail />
      </StyledExternalLink>
    </CopyToClipboard>
  );
}
