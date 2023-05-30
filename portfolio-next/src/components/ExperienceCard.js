import React from 'react';
import { Card, Container, Grid, Group, Spoiler, Text } from '@mantine/core';
import Image from 'next/image';

function ExperienceCard({title, experience, logo, text}) {
  return (
    <Card shadow="xs" padding="md" radius="md" withBorder>
      <Grid>
        <Grid.Col span={3}>
            <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                style={{ marginRight: '1rem' }}
            />
        </Grid.Col>
        <Grid.Col span={9}>
            <Group spacing="xs">
                <Text weight={700} size="lg">{title}</Text>
                <Text size='sm' color="dimmed"> - {experience}</Text>
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

export default ExperienceCard;