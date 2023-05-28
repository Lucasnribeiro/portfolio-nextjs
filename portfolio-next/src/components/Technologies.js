import { Container, Grid, Group, Image, Text } from "@mantine/core";






export default function Technologies({}){


    return(
        <Group position="center" spacing="xl">
            <div style={{margin: "0px 30px"}}>
                <Grid>
                    <Image maw={55} mx="auto" src="/technologies-icons/react.png" />
                </Grid>
                <Grid>
                    <Text ta="center" fz="sm">React</Text>
                </Grid>
            </div>

            <div style={{margin: "0px 30px"}}>
                <Grid>
                    <Image maw={55} mx="auto" src="/technologies-icons/react.png" />
                </Grid>
                <Grid>
                    <Text ta="center" fz="sm">React</Text>
                </Grid>
            </div>

            <div style={{margin: "0px 30px"}}>
                <Grid>
                    <Image maw={55} mx="auto" src="/technologies-icons/react.png" />
                </Grid>
                <Grid>
                    <Text ta="center" fz="sm">React</Text>
                </Grid>
            </div>
        </Group>
    )
}