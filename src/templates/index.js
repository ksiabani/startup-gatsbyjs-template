import React from 'react';
import Layout from '../components/layout';
import Banner from '../components/banner';
import Grid from '../components/grid';
import { graphql, StaticQuery } from 'gatsby';
import '../sass/style.scss';

const componentsObj = {
  banner: Banner,
  grid: Grid,
};

export default () => (
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
          {components.map(com => {
            const Component = componentsObj[com.name]
            return (
              <Component
                data={com.data}
                deps={com.dependencies}
                elemId={com.title.toLowerCase()}
                key={com.name}
              />
            )
          })}
        </Layout>
      )
    }}
  />
);
