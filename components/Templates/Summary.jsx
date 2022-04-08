import styled from 'styled-components';
import Image from 'next/image';
import PersonalLinks from 'components/Molecules/PersonalLinks';
import MainIsotypes from 'components/Molecules/MainIsotypes';
import CodeEditor from 'components/Organisms/CodeEditor';
import PersonalPicture from 'public/static/img/PersonalPicture.png';
import { Flex, Section } from 'components/StyledComponents';
import media from 'src/style-guide/breakpoints';
import PortfolioDemo from 'public/static/img/PortfolioDemo.png';
import AnimatedArrow from 'components/Atoms/AnimatedArrow';

export default function Summary() {
  return (
    <S_Summary>
      <Flex column fullCenter gap={0.5}>
        <h1>JEAN</h1>
        <h3>Frontend Developer</h3>

        <Image
          src={PersonalPicture}
          width={180}
          height={210}
          alt="Personal Picture"
        />
        <PersonalLinks />
      </Flex>
      <AnimatedArrow />
      <Flex column fullCenter gap={1}>
        <MainIsotypes />
        <CodeEditor />
      </Flex>
      <AnimatedArrow />
      <Flex fullCenter>
        <Image
          src={PortfolioDemo}
          width={380}
          height={192}
          layout="intrinsic"
          alt="Project demo"
        />
      </Flex>
    </S_Summary>
  );
}

const S_Summary = styled(Section)`
  display: grid;
  row-gap: 2.5rem;

  ${media.lg} {
    min-height: calc(100vh - var(--header_height));
    grid: 100% / calc(30% - 75px) 75px 40% 75px calc(30% - 75px);
    row-gap: 0;
  }
`;
