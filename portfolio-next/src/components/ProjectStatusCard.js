import { Badge, Card, Group, Indicator, Text } from "@mantine/core";
import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';
import { HiExternalLink } from 'react-icons/hi';




export default function ProjectStatusCard({github, urls, status}){



    return (
        <Card padding="lg" radius="sm" withBorder>
            <Group position="apart" mt="md" mb="xl">
                <Text weight={300}><AiFillGithub/> Github</Text>
                <Group position="apart" >
                    <Link href={github ?? '/'} target="_blank"><Badge variant="light">Page</Badge> </Link>
                    <Link href={github + '/fork' ?? '/'} target="_blank"><Badge color="red" variant="light">Fork</Badge></Link>
                </Group>
            </Group>
            { urls.data?.map((url) => 
                <Group key={url} position="apart">
                    <Indicator inline size={8} processing offset={-1} position="top-end" color={url.attributes.status.data.attributes.title == 'Online' ? 'green' : 'else' } withBorder>
                        <Text weight={300}>{url.attributes.status.data.attributes.title}</Text>
                    </Indicator>
                    <Link style={{textDecoration: 'none'}} href={url.attributes.url ?? '/'} target="_blank"><Text >{url.attributes.url} <HiExternalLink/></Text></Link>
                </Group>
            )}      
        </Card>
    )
}