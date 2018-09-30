const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPagesJson {
          edges {
            node {
              id
              template
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allPagesJson.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/${node.template}.js`),
          context: {
            id: node.id,
          },
        })
      })
      resolve()
    })
  })
}
