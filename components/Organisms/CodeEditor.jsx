import styled from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import CodeContent from 'components/Molecules/CodeContent';

export default function CodeEditor() {
  const { mainTechSelected } = useSettings();

  return (
    <StyledCodeEditor>
      {mainTechSelected === 'React' && <CodeContent.React />}
      {mainTechSelected === 'Styled' && <CodeContent.StyledComponents />}
      {mainTechSelected === 'Redux' && <CodeContent.Redux />}
    </StyledCodeEditor>
  );
}

const StyledCodeEditor = styled.pre`
  background-color: var(--code_editor_background);
  width: min(450px, var(--100vw));
  height: 350px;
  padding: 1rem;
  border-radius: 8px;
  position: relative;
  font-size: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
`;
