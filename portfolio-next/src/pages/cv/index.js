import Footer from "@/components/Footer";
import { Anchor, Button, Container, Grid, MediaQuery } from "@mantine/core";
import dynamic from "next/dynamic";
import Head from "next/head";

const PDFViewer = dynamic(() => import("../../components/PDFViewer"), {
    ssr: false
  });

export default function CVPage(){

    return(
    <>
        <Head>
            <title>Lucas Ribeir: Curriculum</title>
            <meta name="description" 
                content="Lucas Ribeiro CV Download" 
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <MediaQuery largerThan={'md'} styles={{marginLeft: '150px', marginRight: '150px'}}>
                <div>
                    <Grid justify="end" p={10} style={{marginTop:50}}><Button><Anchor underline={false} color={'white'} href={'/cv/lucas-ribeiro-curriculum-en-2023-06.pdf'} download> Download </Anchor></Button></Grid>
                    <Container fluid mt={5} mb={250} p={20} style={{backgroundColor: '#f0f0f0'}}>
                        <Grid justify="center">
                            <PDFViewer filePath={"/cv/lucas-ribeiro-curriculum-en-2023-06.pdf"}/>
                        </Grid>
                    </Container>
                </div>
            </MediaQuery>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
    )
}




