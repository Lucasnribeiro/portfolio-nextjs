import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
    Grid,
  } from '@mantine/core';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail  } from 'react-icons/ai';
import Cubes from './ThreeJS/Cubes';
  
  export function Hero() {

    return (
      <div>
        <Container>
            <Grid justify="center" mt={"45px"} mb={150}>
                <Grid.Col span={6}>
                    <Text>
                        Hello, i'm
                    </Text>
                    <Title size={90}>
                        Lucas
                    </Title>
                    <Text color="#8a8a8a" mt="md">
                        Full-stack Developer, passionate about every step of bulding software solutions. 
                    </Text>

                    <Group mt={40}>
                      <AiFillGithub size='30px'/>
                      <AiFillLinkedin size='30px'/>
                      <AiOutlineWhatsApp size='30px'/>
                      <AiOutlineMail size='30px'/>
                      <Button ml={30}>Contact-me</Button>
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