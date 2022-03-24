import { Indent, Style, Tag } from 'components/Atoms/CodeEditorElements';
import {
  Attribute,
  Component,
  Function,
  HtmlTag,
  Keyword,
  Punctuation,
  String,
} from 'components/Organisms/CodeEditor';

export function React() {
  return (
    <>
      <div>
        <Keyword>export default function </Keyword>
        <Function>Summary</Function>
        <Punctuation>{'(){'}</Punctuation>
      </div>
      <div>
        <Indent indent={1} />
        <Keyword>return (</Keyword>
      </div>
      <div>
        <Indent indent={2} />
        <Tag>StyledSummary</Tag>
      </div>
      <div>
        <Indent indent={3} />
        <Punctuation>{'<'}</Punctuation>
        <Component>Flex</Component>
        <Attribute> column fullCenter gap</Attribute>
        <Punctuation>{'='}</Punctuation>
        <Punctuation>{'"'}</Punctuation>
        <String>0.5rem</String>
        <Punctuation>{'"'}</Punctuation>
        <Punctuation>{'>'}</Punctuation>
      </div>
      <div>
        <Indent indent={4} />
        <Tag htmlTag>h1</Tag>
        <code>JEAN</code>
        <Tag htmlTag toClose>
          h1
        </Tag>
      </div>
      <div>
        <Indent indent={4} />
        <Tag htmlTag>h3</Tag>
        <code>Frontend Developer</code>
        <Tag htmlTag toClose>
          h3
        </Tag>
      </div>
      <div>
        <Indent indent={4} />
        <Tag autoClose>PersonalPicture</Tag>
        <br />
        <Indent indent={4} />
        <Tag autoClose>PersonalLinks</Tag>
      </div>
      <div>
        <Indent indent={3} />
        <Tag toClose>Flex</Tag>
        <br />
        <Indent indent={3} />
        <Tag>Flex</Tag>
      </div>

      <div>
        <Indent indent={4} />
        <Tag autoClose>AnimatedArrow</Tag>
        <br />
        <Indent indent={4} />
        <Tag autoClose>MainIsotypes</Tag>
        <br />
        <Indent indent={4} />
        <Tag autoClose>CodeEditor</Tag>
        <br />
        <Indent indent={4} />
        <Tag autoClose>AnimatedArrow</Tag>
      </div>

      <div>
        <Indent indent={3} />
        <Tag toClose>Flex</Tag>
        <br />
        <Indent indent={3} />
        <Tag>Flex</Tag>
      </div>
      <div>
        <Indent indent={4} />
        <Tag autoClose>ProjectPicture</Tag>
      </div>
      <div>
        <Indent indent={3} />
        <Tag toClose>Flex</Tag>
      </div>
      <div>
        <Indent indent={2} />
        <Tag toClose>StyledSummary</Tag>
      </div>
      <div>
        <Indent indent={1} />
        <Keyword>)</Keyword>
      </div>
      <div>
        <Punctuation>{'}'}</Punctuation>
      </div>
    </>
  );
}

export function StyledComponents() {
  return (
    <>
      <div>
        <Keyword>const </Keyword>
        <Function>StyledHeader </Function>
        <Punctuation>{'= '}</Punctuation>
        <Function>styled</Function>
        <Punctuation>{'('}</Punctuation>
        <code>Container</code>
        <Punctuation>{')'}</Punctuation>
        <Punctuation>{'`'}</Punctuation>
      </div>
      <br />
      <Style indent={1} prop="width">
        100%
      </Style>
      <Style indent={1} prop="height">
        var(--headerHeight)
      </Style>
      <Style indent={1} prop="backdrop-filter">
        blur(2px)
      </Style>
      <Style indent={1} prop="display">
        flex
      </Style>
      <Style indent={1} prop="justify-content">
        space-between
      </Style>
      <Style indent={1} prop="align-items">
        center
      </Style>
      <Style indent={1} prop="position">
        fixed
      </Style>
      <Style indent={1} prop="top">
        0
      </Style>
      <Style indent={1} prop="z-index">
        1
      </Style>
      <div>
        <Punctuation>{'`'}</Punctuation>
      </div>
    </>
  );
}

export function Redux() {
  return (
    <>
      <div>
        <Keyword>const </Keyword>
        <Function>settingsSlice </Function>
        <Punctuation>{'= '}</Punctuation>
        <Function>createSlice</Function>
        <Punctuation>{'({'}</Punctuation>
      </div>
      <div>
        <Indent indent="1" />
        <code>name</code>
        <Punctuation>: </Punctuation>
        <String>{'settingsSlice'}</String>
        <Punctuation>,</Punctuation>
      </div>
      <div>
        <Indent indent="1" />
        <code>initialState</code>
        <Punctuation>,</Punctuation>
      </div>
      <br />
      <div>
        <Indent indent="1" />
        <code>reducers</code>
        <Punctuation>: </Punctuation>
        <Punctuation>{'{'}</Punctuation>
      </div>
      <div>
        <Indent indent="2" />
        <Function>toggleDarkMode</Function>
        <Punctuation>: </Punctuation>
        <code>s </code>
        <Punctuation>{'=> {'}</Punctuation>
      </div>
      <div>
        <Indent indent="3" />
        <code>s</code>
        <Punctuation>.</Punctuation>
        <HtmlTag>darkMode</HtmlTag>
        <Punctuation>{' = '}</Punctuation>
        <Punctuation>!</Punctuation>
        <code>s</code>
        <Punctuation>.</Punctuation>
        <HtmlTag>darkMode</HtmlTag>
      </div>
      <div>
        <Indent indent="3" />
        <code>localStorage</code>
        <Punctuation>.</Punctuation>
        <HtmlTag>darkMode</HtmlTag>
        <Punctuation>{' = '}</Punctuation>
        <code>s</code>
        <Punctuation>.</Punctuation>
        <HtmlTag>darkMode</HtmlTag>
      </div>
      <div>
        <Indent indent="2" />
        <Punctuation>{'},'}</Punctuation>
      </div>
      <div>
        <Indent indent="1" />
        <Punctuation>{'},'}</Punctuation>
      </div>

      <div>
        <Punctuation>{'})'}</Punctuation>
      </div>
    </>
  );
}

const CodeContent = {
  React,
  StyledComponents,
  Redux,
};

export default CodeContent;
