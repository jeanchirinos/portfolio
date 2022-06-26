import styled from 'styled-components';
import useTechnology from 'components/Atoms/AllTechnologies';

export default function SmallIsotype({ name }) {
  const { component, color, fullName } = useTechnology(name);

  const props = {
    color,
    viewBox: '0 0 104 104',
  };

  const title = fullName || name;

  return (
    <S_SmallIsotype {...props}>
      <>
        <title>{title}</title>
        {component}
      </>
    </S_SmallIsotype>
  );
}

const S_SmallIsotype = styled.svg`
  width: 1.3rem;
  height: 1.3rem;
  fill: transparent;
`;
