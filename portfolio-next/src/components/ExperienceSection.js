import { Container, Grid, Text } from "@mantine/core";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection({skills, strapi}){
    
    return (
        <Container>
            <Grid gutter={30}>
                {skills.map((skill) =>
                    <Grid.Col span={6}>
                        <ExperienceCard 
                            title={skill.attributes.title} 
                            experience={skill.attributes.time} 
                            logo={`${strapi}${skill.attributes.logo.data.attributes.url}`} 
                            text={skill.attributes.text}
                        />
                    </Grid.Col>
                )}
            </Grid>
        </Container>
    )
}

