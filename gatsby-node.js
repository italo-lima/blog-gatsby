const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

//Adicionando slug ao post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

//Criando páginas
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query PostList {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            fields {
              slug
            }
            timeToRead
            frontmatter {
              background
              category
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
              image
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }`
    )

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    
    Array.from({length: numPages}).forEach((_, i) => {
      createPage({
        path: i == 0 ? '/' : `/page/${i+1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      })
    })
  }