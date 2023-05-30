import { Container, Grid } from "@mantine/core";
import SkillCard from "./SkillCard";

export default function SkillsSection({skills, strapi}){
    
    return (
        <Container>
            <Grid gutter={30}>
                {skills.map((skill) =>
                    <Grid.Col key={skill.attributes.title} span={6}>
                        <SkillCard 
                            title={skill.attributes.title} 
                            skill={skill.attributes.time} 
                            logo={`${strapi}${skill.attributes.logo.data.attributes.url}`} 
                            text={skill.attributes.text}
                        />
                    </Grid.Col>
                )}
            </Grid>
        </Container>
    )
}

