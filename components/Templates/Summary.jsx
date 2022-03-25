import styled from 'styled-components';
import Image from 'next/image';
import PersonalLinks from 'components/Molecules/PersonalLinks';
import MainIsotypes from 'components/Molecules/MainIsotypes';
import CodeEditor from 'components/Organisms/CodeEditor';
import PersonalPicture from 'static/img/PersonalPicture.png';
import { Flex, Section } from 'components/StyledComponents';
import mediaQueries from 'src/style-guide/breakpoints';
import PortfolioDemo from 'static/img/PortfolioDemo.png';
import AnimatedArrow from 'components/Atoms/AnimatedArrow';

export default function Summary() {
  return (
    <StyledSummary>
      <Flex column fullCenter gap="0.5rem">
        <h1>JEAN</h1>
        <h3>Frontend Developer</h3>

        <Image
          alt="Personal Picture"
          width={180}
          height={210}
          src={PersonalPicture}
        />
        <PersonalLinks />
      </Flex>
      <AnimatedArrow />
      <Flex column fullCenter gap="1rem">
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
    </StyledSummary>
  );
}

const StyledSummary = styled(Section)`
  display: grid;
  gap: 2.5rem;

  ${mediaQueries.lg} {
    gap: 0;
    grid: 100% / calc(30% - 75px) 75px 40% 75px calc(30% - 75px);
  }
`;
