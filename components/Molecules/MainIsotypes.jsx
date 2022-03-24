import BigIsotype from 'components/Atoms/BigIsotype';
import { Flex } from 'components/StyledComponents';

export default function MainIsotypes() {
  return (
    <Flex gap="1rem" $wrap justifyCenter>
      <BigIsotype name="React" />
      <BigIsotype name="Styled" />
      <BigIsotype name="Redux" />
    </Flex>
  );
}
