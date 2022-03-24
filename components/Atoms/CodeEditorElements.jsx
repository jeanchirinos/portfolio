import {
  Component,
  HtmlTag,
  Punctuation,
} from 'components/Organisms/CodeEditor';

export function Indent({ indent }) {
  const indentNumber = () => {
    let lines = '';

    for (let i = 1; i <= indent; i++) {
      lines += ' ';
    }

    return lines;
  };

  return <code>{indentNumber()}</code>;
}

export function Tag({ children, htmlTag, toClose, autoClose }) {
  const selectedTag = htmlTag ? (
    <HtmlTag>{children}</HtmlTag>
  ) : (
    <Component>{children}</Component>
  );

  const firstSymbol = toClose ? (
    <Punctuation>{'</'}</Punctuation>
  ) : (
    <Punctuation>{'<'}</Punctuation>
  );

  const closeType = autoClose ? (
    <Punctuation>{' />'}</Punctuation>
  ) : (
    <Punctuation>{'>'}</Punctuation>
  );

  return (
    <>
      {firstSymbol}
      {selectedTag}
      {closeType}
    </>
  );
}
