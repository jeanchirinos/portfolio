import { Line, Tag, Style } from 'components/Atoms/CodeEditorElements';
import {
  Att,
  Com,
  Key,
  Fun,
  Pun,
  Htm,
  Str,
} from 'components/Atoms/CodeEditorElements';

export function React() {
  return (
    <>
      <Line>
        <Key>export default function </Key>
        <Fun>Summary</Fun>
        <Pun>{'(){'}</Pun>
      </Line>
      <Line i={1}>
        <Key>return </Key>
        <Pun>{'('}</Pun>
      </Line>
      <Line i={2}>
        <Tag>StyledSummary</Tag>
      </Line>
      <Line i={3}>
        <Pun>{'<'}</Pun>
        <Com>Flex </Com>
        <Att>column fullCenter gap</Att>
        <Pun>{"='"}</Pun>
        <Str>0.5rem</Str>
        <Pun>{"'>"}</Pun>
      </Line>
      <Line i={4}>
        <Tag html>h1</Tag>
        <code>JEAN</code>
        <Tag html toClose>
          h1
        </Tag>
      </Line>
      <Line i={4}>
        <Tag html>h3</Tag>
        <code>Frontend Developer</code>
        <Tag html toClose>
          h3
        </Tag>
      </Line>
      <Line i={4}>
        <Tag autoClose>PersonalPicture</Tag>
      </Line>
      <Line i={4}>
        <Tag autoClose>PersonalLinks</Tag>
      </Line>
      <Line i={3}>
        <Tag toClose>Flex</Tag>
      </Line>
      <Line i={2}>
        <Tag toClose>StyledSummary</Tag>
      </Line>
      <Line i={1}>
        <Pun>{')'}</Pun>
      </Line>
      <Line>
        <Pun>{'}'}</Pun>
      </Line>
    </>
  );
}

export function StyledComponents() {
  return (
    <>
      <Line>
        <Key>const </Key>
        <Fun>StyledHeader </Fun>
        <Pun>{'= '}</Pun>
        <Fun>styled</Fun>
        <Pun>{'('}</Pun>
        <code>Container</code>
        <Pun>{')`'}</Pun>
      </Line>
      <br />
      <Style i={1} prop="width">
        100%
      </Style>
      <Style i={1} prop="height">
        var(--headerHeight)
      </Style>
      <Style i={1} prop="backdrop-filter">
        blur(2px)
      </Style>
      <Style i={1} prop="display">
        flex
      </Style>
      <Style i={1} prop="justify-content">
        space-between
      </Style>
      <Style i={1} prop="align-items">
        center
      </Style>
      <Style i={1} prop="position">
        fixed
      </Style>
      <Style i={1} prop="top">
        0
      </Style>
      <Style i={1} prop="z-index">
        1
      </Style>
      <Line>
        <Pun>{'`'}</Pun>
      </Line>
    </>
  );
}

export function Redux() {
  return (
    <>
      <Line>
        <Key>const </Key>
        <Fun>settingsSlice </Fun>
        <Pun>{'= '}</Pun>
        <Fun>createSlice</Fun>
        <Pun>{'({'}</Pun>
      </Line>
      <Line i={1}>
        <code>name</code>
        <Pun>: </Pun>
        <Str>{"'settingsSlice'"}</Str>
        <Pun>,</Pun>
      </Line>
      <Line i={1}>
        <code>initialState</code>
        <Pun>,</Pun>
      </Line>
      <br />
      <Line i={1}>
        <code>reducers</code>
        <Pun>{': {'} </Pun>
      </Line>
      <Line i={2}>
        <Fun>toggleDarkMode</Fun>
        <Pun>: </Pun>
        <code>s </code>
        <Pun>{'=> {'}</Pun>
      </Line>
      <Line i={3}>
        <code>s</code>
        <Pun>.</Pun>
        <Htm>darkMode</Htm>
        <Pun>{' = !'}</Pun>
        <code>s</code>
        <Pun>.</Pun>
        <Htm>darkMode</Htm>
      </Line>
      <Line i={3}>
        <code>localStorage</code>
        <Pun>.</Pun>
        <Htm>darkMode</Htm>
        <Pun>{' = '}</Pun>
        <code>s</code>
        <Pun>.</Pun>
        <Htm>darkMode</Htm>
      </Line>
      <Line i={2}>
        <Pun>{'},'}</Pun>
      </Line>
      <Line i={1}>
        <Pun>{'},'}</Pun>
      </Line>
      <Line>
        <Pun>{'})'}</Pun>
      </Line>
    </>
  );
}

const CodeContent = {
  React,
  StyledComponents,
  Redux,
};

export default CodeContent;
