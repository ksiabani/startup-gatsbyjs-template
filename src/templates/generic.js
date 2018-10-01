import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Editor from '../components/editor'
import { graphql, StaticQuery } from 'gatsby'

const GenericTemplate = ({data}) => {
  return (
    <StaticQuery
      query={graphql`
        query GenericQuery($id: String) {
          pagesJson(id: { eq: $id }) {
            components {
              id
              name
              title
              position
              data {
                heading
                description
                html
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
              const Component = com.name.toLowerCase()
              switch (Component) {
                case 'hero':
                  return (
                    <Hero
                      data={com.data}
                      elemId={com.title.toLowerCase()}
                      key={i}
                    />
                  )
                case 'editor':
                  return (
                    <Editor
                      data={com.data}
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

export default GenericTemplate
