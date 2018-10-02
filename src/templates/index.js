import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Grid from '../components/grid'
import { graphql, StaticQuery } from 'gatsby'

const IndexTemplate = ({ pageContext }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const page = data.allPagesJson.edges.find(
          edge => edge.node.id === pageContext.id
        )
        const components = page.node.components.sort(
          (a, b) => a.position - b.position
        )
        return (
          <Layout>
            {components.map((com, i) => {
              const Component = com.name.toLowerCase()
              switch (Component) {
                case 'banner':
                  return (
                    <Banner
                      data={com.data}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                case 'grid':
                  return (
                    <Grid
                      data={com.data}
                      deps={com.dependencies}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                default:
                  return ""
              }
            })}
          </Layout>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    allPagesJson {
      edges {
        node {
          id
          components {
            name
            title
            position
            data {
              heading
              description
              btnTxt
            }
            dependencies {
              name
              data {
                heading
                description
                icon
              }
            }
          }
        }
      }
    }
  }
`

// This doesn't work yet.
// Despite the docs, id is never passed to GraphQL.
// Leaving this here for later use maybe.
// const query = graphql`
//         query IndexQuery ($id: String!) {
//           pagesJson(id: { eq: $id }) {
//             components {
//               id
//               name
//               title
//               position
//               data {
//                 heading
//                 description
//                 btnTxt
//               }
//               dependencies {
//                 name
//                 data {
//                   heading
//                   description
//                   icon
//                 }
//               }
//             }
//           }
//         }
//       `

export default IndexTemplate
