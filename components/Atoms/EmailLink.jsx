import CopyToClipboard from 'react-copy-to-clipboard';
import { MdMail } from 'react-icons/md';
import toast from 'react-hot-toast';
import { S_ExternalLink } from './ExternalLink';
import personalInfo from 'src/data/personalInfo';

export default function EmailLink() {
  function handleCopy() {
    toast('Email copied', { icon: '📩' });
  }

  return (
    <CopyToClipboard text={personalInfo.email} onCopy={handleCopy}>
      <S_ExternalLink>
        <MdMail />
      </S_ExternalLink>
    </CopyToClipboard>
  );
}
