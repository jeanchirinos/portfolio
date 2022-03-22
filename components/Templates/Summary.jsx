import styled from 'styled-components';
import Image from 'next/image';
import PersonalLinks from 'components/Molecules/PersonalLinks';
import MainIsotypes from 'components/Molecules/MainIsotypes';
import CodeEditor from 'components/Organisms/CodeEditor';
import PersonalPicture from 'public/img/PersonalPicture.png';

export default function Summary() {
  return (
    <StyledSummary>
      <h1>JEAN</h1>
      <h3>Frontend Developer</h3>
      <Image
        alt="Personal Picture"
        width={180}
        height={210}
        src={PersonalPicture}
      />
      <PersonalLinks />
      <MainIsotypes />
      <CodeEditor />
    </StyledSummary>
  );
}

const StyledSummary = styled.section`
  padding: 0 var(--padding);
`;
