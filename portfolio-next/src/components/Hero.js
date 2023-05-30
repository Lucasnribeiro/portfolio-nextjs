import {
    Container,
    Title,
    Group,
    Text,
    Grid,
    Tooltip,
    CheckIcon,
    UnstyledButton,
    ActionIcon,
    useMantineColorScheme,
  } from '@mantine/core';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail  } from 'react-icons/ai';
import Cubes from './ThreeJS/Cubes';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import ContactModal from './ContactModal';
  
  export function Hero() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const light = colorScheme === 'light';

    const anchorStyles = {
      color: 'black',
      textDecoration: 'none',
      lineHeight: '0'
    };

    const clipboard = useClipboard({ timeout: 500 });

    return (
      <div>
        <Container>
            <Grid justify="center" mt={"45px"} mb={150}>
                <Grid.Col span={6}>
                    <Text>
                        Hello, i&apos;m
                    </Text>
                    <Title size={90}>
                        Lucas
                    </Title>
                    <Text color="#8a8a8a" mt="md">
                        Full-stack Developer, passionate about every step of bulding software solutions. 
                    </Text>

                    <Group mt={40}>
                      <Tooltip label="github.com/Lucasnribeiro">
                        <a href='https://github.com/Lucasnribeiro' style={anchorStyles} target="_blank">
                          <ActionIcon 
                            color={colorScheme ? 'dark' : 'gray'}
                          >
                            <AiFillGithub size='30px'/>
                          </ActionIcon>
                        </a>
                      </Tooltip>
                      <Tooltip label="linkedin.com/in/lucasmnribeiro/">
                        <a href='https://www.linkedin.com/in/lucasmnribeiro/' style={anchorStyles} target="_blank">
                         <ActionIcon 
                            color={colorScheme ? 'dark' : 'gray'}
                          >
                            <AiFillLinkedin size='30px'/>
                          </ActionIcon>
                        </a>
                      </Tooltip>
                      <Tooltip label="wa.me/5521994846358">
                        <a href='https://wa.me/5521994846358' style={anchorStyles} target="_blank">
                          <ActionIcon 
                            color={colorScheme ? 'dark' : 'gray'}
                          >
                            <AiOutlineWhatsApp size='30px'/>
                          </ActionIcon>
                        </a>
                      </Tooltip>
                      <Tooltip label="lucasmnribeiro@gmail.com">
                          <ActionIcon 
                            onClick={() => {
                              clipboard.copy('lucasmnribeiro@gmail.com');  
                                notifications.show({
                                  title: 'Success!',
                                  message: 'The email was copied to your clipboard! 💾',
                                  icon: <CheckIcon/>
                              })
                            }} 
                            color={colorScheme ? 'dark' : 'gray'}
                          >
                            <AiOutlineMail size='30px'/>
                          </ActionIcon>
                      </Tooltip>
                      <ContactModal />
                    </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Cubes />
                </Grid.Col>

            </Grid>

        </Container>
      </div>
    );
  }