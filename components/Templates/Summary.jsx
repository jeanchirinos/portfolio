import styled from 'styled-components';
import Image from 'next/image';
import PersonalLinks from 'components/Molecules/PersonalLinks';
import MainIsotypes from 'components/Molecules/MainIsotypes';
import CodeEditor from 'components/Organisms/CodeEditor';
import PersonalPicture from 'static/img/PersonalPicture.png';
import { Flex, Section } from 'components/StyledComponents';
import mediaQueries from 'src/style-guide/breakpoints';
import AnimatedArrow, {
  StyledAnimatedArrow,
} from 'components/Atoms/AnimatedArrow';
import PortfolioDemo from 'static/img/PortfolioDemo.png';

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
      <Flex column fullCenter gap="3rem">
        <AnimatedArrow />
        <Flex column fullCenter gap="1rem">
          <MainIsotypes />
          <CodeEditor />
        </Flex>
        <AnimatedArrow />
      </Flex>
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

  > ${Flex}:first-child {
    text-align: center;
  }

  ${mediaQueries.lg} {
    gap: 0;
    grid: 100% / 25% 45% 30%;

    > ${Flex}:nth-child(2) {
      flex-direction: row;
      gap: 2rem;
    }

    ${StyledAnimatedArrow} {
      transform: rotate(270deg);
    }
  }

  ${mediaQueries.xl} {
    > ${Flex}:nth-child(2) {
      justify-content: space-around;
    }
  }
`;
