import ExternalLink from 'components/Atoms/ExternalLink';
import GithubLink from 'components/Atoms/GithubLink';
import { GITHUB, LINKEDIN } from 'src/data/personalInfo';
import { AiFillLinkedin } from 'react-icons/ai';
import { Flex } from 'components/StyledComponents';
import EmailLink from 'components/Atoms/EmailLink';

export default function PersonalLinks() {
  return (
    <Flex columnGap={0.8}>
      <GithubLink link={GITHUB} />
      <ExternalLink link={LINKEDIN}>
        <AiFillLinkedin />
      </ExternalLink>
      <EmailLink />
    </Flex>
  );
}
