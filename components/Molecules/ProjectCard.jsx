import styled from 'styled-components';
import toast from 'react-hot-toast';
import SmallIsotype from 'components/Atoms/SmallIsotype';
import GithubLink from 'components/Atoms/GithubLink';
import { S_ExternalLink } from 'components/Atoms/ExternalLink';
import { Flex } from 'components/StyledComponents';
import Image from 'next/image';

export default function ProjectCard({
  name,
  img,
  link,
  githubLink,
  technologies,
}) {
  const linkToProject = (
    <a href={link} target="_blank" rel="noreferrer" className="linkToWeb"></a>
  );

  const toastNotification = (
    <div
      className="linkToWeb"
      onClick={() => toast('You are here !', { icon: '👇' })}
    />
  );

  const clickableSide = link ? linkToProject : toastNotification;

  const usedTechnologies = technologies.map(tech => (
    <SmallIsotype key={tech} name={tech} />
  ));

  return (
    <S_ProjectCard>
      <Image
        alt={name}
        src={img}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        // priority
      />
      {clickableSide}
      <Flex column justify="space-between">
        <p className="fs-big fw-bold">{name}</p>
        <Flex gap={0.5}>{usedTechnologies}</Flex>
        <GithubLink link={githubLink} />
      </Flex>
    </S_ProjectCard>
  );
}

const S_ProjectCard = styled.div`
  display: grid;
  grid: 75% 25% / 100%;
  border-radius: 12px;
  box-shadow: var(--project_card_shadow);
  position: relative;
  overflow: hidden;

  .linkToWeb {
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 1;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  & > ${Flex} {
    padding: 0.8rem;
    background-color: var(--theme_500);
    z-index: 1;
  }

  ${S_ExternalLink} {
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
  }
`;
