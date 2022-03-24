import styled, { css } from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import CodeContent from 'components/Molecules/CodeContent';
import ScrollToggle from 'components/Atoms/ScrollToggle';

export default function CodeEditor() {
  const { mainTechSelected, codeScroll } = useSettings();

  return (
    <StyledCodeEditor>
      <ScrollToggle />
      <StyledCodeContent codeScroll={codeScroll}>
        {mainTechSelected === 'React' && <CodeContent.React />}
        {mainTechSelected === 'Styled' && <CodeContent.StyledComponents />}
        {mainTechSelected === 'Redux' && <CodeContent.Redux />}
      </StyledCodeContent>
    </StyledCodeEditor>
  );
}

const StyledCodeEditor = styled.div`
  background-color: var(--theme_400);
  width: min(450px, var(--100vw));
  height: 350px;
  border-radius: 8px;
  position: relative;
`;

const StyledCodeContent = styled.pre(
  ({ codeScroll }) => css`
    height: 100%;
    padding: 1rem;
    overflow: ${codeScroll ? 'auto' : 'hidden'};
  `
);

export const Keyword = styled.code`
  color: #c5a5c5;
`;

export const Function = styled.code`
  color: #91c5fd;
`;

export const Punctuation = styled.code`
  color: #bfc8d9;
`;

export const HtmlTag = styled.code`
  color: #fca1a1;
`;

export const Component = styled.code`
  color: #fac863;
`;

export const Attribute = styled.code`
  color: #c5a5c5;
`;

export const String = styled.code`
  color: #88c6be;
`;
