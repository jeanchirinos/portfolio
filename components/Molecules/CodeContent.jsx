import { Indent, Tag } from 'components/Atoms/CodeEditorElements';
import {
  Attribute,
  Component,
  Function,
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
        <Punctuation>(){'{'}</Punctuation>
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
  return <></>;
}

export function Redux() {
  return <></>;
}

const CodeContent = {
  React,
  StyledComponents,
  Redux,
};

export default CodeContent;
