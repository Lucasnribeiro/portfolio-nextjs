const { gql } = require("@apollo/client");

const GET_ALL_PROJECTS = gql`
query {
    projects{
      data{
        attributes{
          title
          description
          urlSlug
          content
          cover{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_ALL_PROJECTS_SLUGS = gql`
query {
    projects{
      data{
        attributes{
          urlSlug
        }
      }
    }
  }
`;

const GET_PROJECT = gql`
query($slug: String!) {
  projects(filters: {urlSlug: { eq: $slug} }) {
    data{
      attributes{
        title
        description
        urlSlug
        content
        github
        external_urls{
          data{
            attributes{
              title
              url
              status{
                data{
                  attributes{
                    title
                    
                  }
                }
              }
            }
          }
        }
        status{
          data{
            attributes{
              title
            }
          }
        }
        cover{
          data{
            attributes{
              url
            }
          }
        }
        tags{
          data{
            attributes{
              title
              color
              description
            }
          }
        }
      }
    }
	}
}
`;

export { 
    GET_ALL_PROJECTS,
    GET_PROJECT,
    GET_ALL_PROJECTS_SLUGS
}