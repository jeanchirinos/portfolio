import ExternalLink from 'components/Atoms/ExternalLink';
import GithubLink from 'components/Atoms/GithubLink';
import personalInfo from 'src/data/personalInfo';
import { AiFillLinkedin } from 'react-icons/ai';
import { Flex } from 'components/StyledComponents';
import EmailLink from 'components/Atoms/EmailLink';

export default function PersonalLinks() {
  return (
    <Flex gap="0.8rem">
      <GithubLink link={personalInfo.links.github} />
      <ExternalLink link={personalInfo.links.linkedin}>
        <AiFillLinkedin />
      </ExternalLink>
      <EmailLink />
    </Flex>
  );
}
