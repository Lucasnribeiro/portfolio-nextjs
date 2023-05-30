import { Container, Grid, Text } from "@mantine/core";
import Link from "next/link";



export default function Footer(){

    return (
        <Container fluid justify="space-between" mt={100}>
            <Grid>
                <Grid.Col span={4}>
                    <Text size={12} color="dimmed">
                    Powered by NextJS and Strapi. 
                    </Text> 
                </Grid.Col>  
                <Grid.Col align="center" span={4}>
                    <Text size={12} color="dimmed"> 
                    {new Date().getFullYear()}
                    </Text> 
                </Grid.Col> 
                <Grid.Col span={4}>
                    <Text size={12} color="dimmed" align="end">
                    You can find the complete project on{' '}
                    <Link href="https://github.com/Lucasnribeiro/portfolio-nextjs" target="_blank">
                        GitHub
                    </Link>
                    .
                    </Text>
                </Grid.Col>
            </Grid>
        </Container>
    )
}