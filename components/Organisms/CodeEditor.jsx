import styled from 'styled-components';
import useSettings from 'src/features/settingsSlice';
import CodeContent from 'components/Molecules/CodeContent';

export default function CodeEditor() {
  const { mainTechSelected } = useSettings();

  return (
    <S_CodeEditor>
      {mainTechSelected === 'React' && <CodeContent.React />}
      {mainTechSelected === 'Styled' && <CodeContent.StyledComponents />}
      {mainTechSelected === 'Redux' && <CodeContent.Redux />}
    </S_CodeEditor>
  );
}

const S_CodeEditor = styled.pre`
  background-color: var(--code_editor_background);
  width: min(450px, var(--100vw));
  height: 350px;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: hidden;

  div {
    animation: typing 2s;
    overflow: hidden;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
