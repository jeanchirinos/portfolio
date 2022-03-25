import ExternalLink from 'components/Atoms/ExternalLink';
import GithubLink from 'components/Atoms/GithubLink';
import personalInfo from 'src/data/personalInfo';
import { AiFillLinkedin } from 'react-icons/ai';
import { Flex } from 'components/StyledComponents';
import EmailLink from 'components/Atoms/EmailLink';

export default function PersonalLinks() {
  const { links } = personalInfo;
  const { github, linkedin } = links;

  return (
    <Flex gap="0.8rem">
      <GithubLink link={github} />
      <ExternalLink link={linkedin}>
        <AiFillLinkedin />
      </ExternalLink>
      <EmailLink />
    </Flex>
  );
}
