import { Avatar, Container, Grid, MediaQuery, Text, Title } from "@mantine/core";



export default function AboutMe(){





    return (

        <Container>
        <Grid>
            <Grid.Col md={12} lg={8}>
                <Title mb={5} order={4}>Welcome to My Tech Journey</Title>
                <Text>
                    Hi there! I'm based in Rio, Brazil, and I've been tinkering with technology for as long as I can remember. Learning programming has been one of the best decisions I've made in my life.
                </Text>
                <Text>
                    I am truly captivated by the problem-solving aspect of programming, constantly striving to find innovative solutions and experiencing the satisfaction that comes with bringing ideas to life after hours of engineering.
                </Text>
                <br/>
                <Title mb={5} order={4}>Connecting with Professionals Worldwide</Title>
                <Text>
                    I have a strong desire to explore international opportunities, and that's why I've created this website—to connect with professionals like you from around the globe.
                </Text>
                <Text>
                    Beyond showcasing my skills and experience, I actively contribute to the global tech community. I plan to share projects that serve as practical demonstrations and insightful tutorials, aiming to inspire and assist fellow developers like yourself.
                </Text>
            </Grid.Col>
            <MediaQuery smallerThan="lg" styles={{display: 'none'}}>
                <Grid.Col span={2}>
                    <Avatar variant="outline" radius="lg" size={270} src="/profile.jpg" />
                </Grid.Col>
            </MediaQuery>
        </Grid>
        </Container>
    )
}