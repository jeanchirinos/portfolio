import styled from 'styled-components';

//* GENERAL
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

export function Line({ i, children }) {
  return (
    <div>
      <Indent indent={i} />
      {children}
    </div>
  );
}

//? JSX
export function Tag({ children, html, toClose, autoClose }) {
  const selectedTag = html ? <Htm>{children}</Htm> : <Com>{children}</Com>;

  const firstSymbol = toClose ? <Pun>{'</'}</Pun> : <Pun>{'<'}</Pun>;

  const closeType = autoClose ? <Pun>{' />'}</Pun> : <Pun>{'>'}</Pun>;

  return (
    <>
      {firstSymbol}
      {selectedTag}
      {closeType}
    </>
  );
}

//? CSS
export function Style({ i, prop, children }) {
  return (
    <div>
      <Indent indent={i} />
      <code>{prop}</code>
      <Pun>: </Pun>
      <Sty>{children}</Sty>
      <Pun>;</Pun>
    </div>
  );
}

//* STYLED COMPONENTS
export const Key = styled.code`
  color: #c5a5c5;
`;

export const Fun = styled.code`
  color: #91c5fd;
`;

export const Pun = styled.code`
  color: #bfc8d9;
`;

export const Htm = styled.code`
  color: #fca1a1;
`;

export const Com = styled.code`
  color: #fac863;
`;

export const Att = styled.code`
  color: #c5a5c5;
`;

export const Str = styled.code`
  color: #88c6be;
`;

export const Sty = styled.code`
  color: #fca1a1;
`;
