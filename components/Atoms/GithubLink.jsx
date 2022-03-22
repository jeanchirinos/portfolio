import { AiFillGithub } from 'react-icons/ai';
import ExternalLink from './ExternalLink';

export default function GithubLink({ link }) {
  return (
    <ExternalLink link={link}>
      <AiFillGithub />
    </ExternalLink>
  );
}
