import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, useMantineTheme } from '@mantine/core';
import ContactForm from './ContactForm';

export default function ContactModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal 
        opened={opened} 
        onClose={close} 
        title="Contact me" 
        centered
      >
        <ContactForm />
      </Modal>

      <Group position="center">
        <Button ml={30} onClick={open}>Contact me</Button>
      </Group>
    </>
  );
}