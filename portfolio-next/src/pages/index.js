import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { GET_ALL_PROJECTS, GET_ALL_PROJECTS_SLUGS, GET_SKILLS } from '@/graphql/queries'
import ProjectCard from '@/components/ProjectCard'
import {  Container, Divider, Grid, Text, Title } from '@mantine/core'
import { apolloClient } from '@/graphql/apolloClient'
import SkillsSection from '@/components/SkillsSection'
import Footer from '@/components/Footer'
import AboutMe from '@/components/AboutMe'
import ContactForm from '@/components/ContactForm'

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
              <Grid.Col key={project.attributes.urlSlug} md={12} lg={4}>
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

        <Divider my={80} label="About" labelPosition="center" />

        <AboutMe />    

        <Divider my={80} label="Contact" labelPosition="center" />  

        <Container>
          <Grid>
            <Grid.Col span={7}>
              <Title order={3}>Let&apos;s Talk!</Title>
              <Text>You can use this form to reach me out, <br/> or if you prefer you can email me at <br/>
                <a style={{textDecoration: 'none'}} href="mailto:lucasmnribeiro@gmail.com"> lucasmnribeiro@gmail.com</a>
              </Text>
            </Grid.Col>
            <Grid.Col span={5}>
              <ContactForm/>
            </Grid.Col>
          </Grid>

        </Container>


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
