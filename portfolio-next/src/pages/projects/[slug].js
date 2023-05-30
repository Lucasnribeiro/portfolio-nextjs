
import ProjectStatusCard from '@/components/ProjectStatusCard';
import { apolloClient } from '@/graphql/apolloClient';
import { GET_ALL_PROJECTS_SLUGS, GET_PROJECT } from '@/graphql/queries';
import { Badge, Container, Grid, Group, Image, Breadcrumbs, Anchor } from '@mantine/core';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import Head from 'next/head';
import TableOfContents from '@/components/TableOfContents';

const Project = ({ project, slug, strapi}) => {

  function parseHeaders(text) {
    const lines = text?.split('\n');
    const headers = [];

    if(lines == undefined){
      return headers;
    }
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(/^#+ (.+)/);
  
      if (match) {
        const level = match[0].match(/^#+/)[0].length;
        const header = { tag: `h${level}`, id: generateSlug(match[1].trim()), title: match[1].trim()};
        headers.push(header);
      }
    }
  
    return headers;
  }

  const generateSlug = (string) => {
    let str = string.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return str;
  };

  return (
  <>
    <Head>
      <title>{project.title}</title>
    </Head>

    <Container fluid mt={10}>

      <Grid>   
        <Grid.Col span={9}>
          <Container>
            <Group position="left" mt="md" mb={2}>
              {project.tags.data.map((tag) =>
                <Badge key={tag.attributes.title} color={tag.attributes.color ?? 'gray'} variant="light">
                    {tag.attributes.title}
                </Badge>
              )}
            </Group>
            <h1>{project.title}</h1>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: React.Fragment,
                  img: ({alt, src, title, ...props}) => (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={src}
                        fill
                        alt={alt}
                        title={title}
                        style={{objectFit: 'contain'}}
                      />
                    </div>
                  ),
                  h2: ({ node, ...props }) => {
                    const id = generateSlug(props.children[0]);
                    return <h2 id={id} {...props}></h2>
                  },
                  h3: ({ node, ...props }) => {
                    const id = generateSlug(props.children[0]);
                    return <h3 id={id} {...props}></h3>
                  },
                  h4: ({ node, ...props }) => {
                    const id = generateSlug(props.children[0]);
                    return <h4 id={id} {...props}></h4>
                  },
                  h5: ({ node, ...props }) => {
                    const id = generateSlug(props.children[0]);
                    return <h5 id={id} {...props}></h5>
                  }

                  ,
                }}
                transformImageUri={ uri =>
                  uri.startsWith("http") ? uri : `${strapi}${uri}` 
                }
              >
                  {project.content}
              </ReactMarkdown>
          </Container>
        </Grid.Col>

        <Grid.Col span={3} >
          <Container style={{position: 'sticky', top: '1rem'}}>
            <ProjectStatusCard github={project.github} urls={project.external_urls} status={project.status?.data?.attributes.title} />
            <TableOfContents contents={parseHeaders(project.content)} />
          </Container>
        </Grid.Col>            
      </Grid>
    </Container>
  </>
  );
};

export async function getStaticPaths() {
    
  const { data } = await apolloClient.query({
      query: GET_ALL_PROJECTS_SLUGS
  })

  const paths = data.projects.data.map((project) => ({
    params: { slug: project.attributes.urlSlug },
  }));

  return {
    paths,
    fallback: false, 
  };

}

export async function getServerSideProps(context) {

  const { slug } = context.params; 

  const { data } = await apolloClient.query({
      query: GET_PROJECT,
      variables: { slug }
  })

  return {
    props: {
      slug,
      strapi: process.env.STRAPI,
      project: data.projects.data[0].attributes
    },
  };

}

export default Project;