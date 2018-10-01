import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Grid from '../components/grid'
import { graphql, StaticQuery } from 'gatsby'

const IndexTemplate = () => {
  return (
    <StaticQuery
      query={graphql`
        query($id: String) {
          pagesJson(id: { eq: $id }) {
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
      `}
      render={data => {
        const components = data.pagesJson.components.sort(
          (a, b) => a.position - b.position
        )
        return (
          <Layout>
            {components.map((com, i) => {
              const Component = com.name
              switch (Component) {
                case 'Banner':
                  return (
                    <Banner
                      data={com.data}
                      deps={com.dependencies}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                case 'Grid':
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

export default IndexTemplate
