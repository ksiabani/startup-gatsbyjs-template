import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Grid from '../components/grid'
import { graphql, StaticQuery } from 'gatsby'

const IndexTemplate = (props) => {
  // console.log(props);
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log(data)
        const components = data.pagesJson.components.sort(
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
                      deps={com.dependencies}
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
              }
            })}
          </Layout>
        )
      }}
    />
  )
}

const query = graphql`
        query IndexQuery ($pageId: String!) {
          pagesJson(id: { eq: $pageId }) {
            components {
              id
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
      `

export default IndexTemplate
