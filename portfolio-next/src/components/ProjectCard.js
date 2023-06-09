
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import Link from 'next/link';



export default function ProjectCard({title, description, tags, urlSlug, headerImage, projectId}){


    return (
        <Card style={{height: "100%"}} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={headerImage}
                    height={160}
                    withPlaceholder
                />
            </Card.Section>
    
            <Group position="apart" mt="md" mb="xs">
                {tags?.map((tag) => 
                    <Badge key={tag} color="pink" variant="light">
                        {tag}
                    </Badge>
                )}
            </Group>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{title}</Text>
            </Group>
    
            <Text size="sm" color="dimmed">
                {description}
            </Text>
    
            <Link href={`/projects/${urlSlug}`} style={{textDecoration: 'none'}}>
                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                    Read more
                </Button>
            </Link>
        </Card>
    )

}