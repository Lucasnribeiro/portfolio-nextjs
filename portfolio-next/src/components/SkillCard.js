import React from 'react';
import { Avatar, Card, Grid, Group, Spoiler, Text, useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';

function SkillCard({title, skill, logo, text}) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const light = colorScheme === 'light';

  return (
    <Card shadow="xs" padding="md" radius="md" withBorder>
      <Grid>
        <Grid.Col span={3}>
          {colorScheme != 'light' ?
              <Avatar                 
                  src={logo}
                  alt="Logo"
                  size={70}
                  bg={'gray.7'}
                  p={5}
                  style={{ marginRight: '1rem'}}
              />
            :
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                style={{ marginRight: '1rem' }}
              /> 
            }
        </Grid.Col>
        <Grid.Col span={9}>
            <Group spacing="xs">
                <Text weight={700} size="lg">{title}</Text>
                <Text size='sm' color="dimmed"> - {skill}</Text>
            </Group>
            <Spoiler 
                styles={{control: {
                    fontSize: 15
                }}} 
                maxHeight={40} 
                showLabel="show more" 
                hideLabel="hide"
            >
                <Text size="sm" color="dimmed">
                    {text}
                </Text>
            </Spoiler>
        </Grid.Col>
      </Grid>
    </Card>
  );
}

export default SkillCard;