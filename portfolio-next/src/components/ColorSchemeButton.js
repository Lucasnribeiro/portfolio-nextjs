import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

export default function ColorSchemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const light = colorScheme === 'light';
  

  return (
    <ActionIcon
      variant="outline"
      color={light ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {light ? <HiOutlineSun size="1.1rem" /> : <HiOutlineMoon size="1.1rem" />}
    </ActionIcon>
  );
}