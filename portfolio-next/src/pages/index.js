import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { GET_ALL_PROJECTS, GET_ALL_PROJECTS_SLUGS, GET_SKILLS } from '@/graphql/queries'
import ProjectCard from '@/components/ProjectCard'
import {  Container, Divider, Grid } from '@mantine/core'
import { apolloClient } from '@/graphql/apolloClient'
import SkillsSection from '@/components/SkillsSection'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({projects, strapi, skills}) {

  return (
    <>
      <Head>
        <title>Lucas Ribeiro</title>
        <meta name="description" 
          content="Full-stack web-dev portfolio, here you can find my projects and how I built them." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Divider my={80} label="Projects" labelPosition="center" />
        <Container>
          <Grid>
            {projects.map((project) => 
              <Grid.Col key={project.attributes.urlSlug} span={4}>
                <ProjectCard 
                  urlSlug={project.attributes.urlSlug} 
                  title={project.attributes.title}
                  description={project.attributes.description} 
                  headerImage={strapi + project.attributes.cover.data?.attributes.url}/>
              </Grid.Col>
            )}
          </Grid>
        </Container>
        <Divider my={80} label="Skills" labelPosition="center" />
        <SkillsSection skills={skills} strapi={strapi}/>
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

  const { data: skillsQuery } = await apolloClient.query({
    query: GET_SKILLS
  })

  return {
    props: {
      strapi: process.env.STRAPI,
      projects: data.projects.data,
      skills: skillsQuery.skills.data
    }
  }
}
