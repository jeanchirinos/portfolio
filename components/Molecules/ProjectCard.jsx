import styled, { css } from 'styled-components';
import toast from 'react-hot-toast';
import SmallIsotype from 'components/Atoms/SmallIsotype';
import GithubLink from 'components/Atoms/GithubLink';
import { StyledExternalLink } from 'components/Atoms/ExternalLink';
import { Flex } from 'components/StyledComponents';

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
    <StyledProjectCard img={img}>
      {clickableSide}
      <div className="info">
        <p className="fs-big fw-bold">{name}</p>
        <Flex gap="0.5rem">{usedTechnologies}</Flex>
        <GithubLink link={githubLink} />
      </div>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div(
  ({ img }) => css`
    display: grid;
    grid: 75% 26% / 100%;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    box-shadow: var(--project_card_shadow);

    .linkToWeb {
      border-radius: 12px 12px 0 0;
      cursor: pointer;
      transition: background-color 0.3s;

      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .info {
      background-color: var(--theme_500);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 0 0 12px 12px;
      padding: 0.8rem;
      position: relative;
    }

    ${StyledExternalLink} {
      position: absolute;
      bottom: 0.8rem;
      right: 0.8rem;
    }
  `
);
