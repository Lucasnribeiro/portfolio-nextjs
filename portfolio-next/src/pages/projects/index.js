import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import { apolloClient } from "@/graphql/apolloClient"
import { GET_ALL_PROJECTS } from "@/graphql/queries"
import { Container, Grid, MediaQuery } from "@mantine/core"
import Head from "next/head"


export default function ProjectsPage({projects, strapi}){



    return(
    <>
        <Head>
            <title>Projects</title>
            <meta name="description" 
                content="Listing all my projects" 
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <MediaQuery largerThan={'md'} styles={{marginLeft: '150px', marginRight: '150px'}}>
                <Container fluid mt={150} mb={250}>
                    <Grid>
                        {projects.map((project) => 
                            <Grid.Col key={project.attributes.urlSlug} md={6} lg={3}>
                                <ProjectCard 
                                    urlSlug={project.attributes.urlSlug} 
                                    title={project.attributes.title}
                                    description={project.attributes.description} 
                                    headerImage={strapi + project.attributes.cover.data?.attributes.url}
                                />
                            </Grid.Col>
                        )}
                    </Grid>
                </Container>
            </MediaQuery>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
    )
}




export async function getServerSideProps(){

    const { data } = await apolloClient.query({
      query: GET_ALL_PROJECTS
    })
  
    return {
      props: {
        strapi: process.env.STRAPI,
        projects: data.projects.data,
      }
    }
    
}
  