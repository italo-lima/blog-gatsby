import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

import {useStaticQuery, graphql} from "gatsby"

const IndexPage = () => {

  const query = graphql`
      query PostList {
        allMarkdownRemark {
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
              }
            }
          }
        }
      }`;

      const {allMarkdownRemark:{edges}} = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(({node:{
        frontmatter, 
        timeToRead, 
        fields
      }}) => (
          <PostItem 
            slug={fields.slug}
            category={frontmatter.category}
            date={frontmatter.date}
            timeToRead={timeToRead}
            title={frontmatter.title}
            description={frontmatter.description}
          />
      ))}
    </Layout>
  )
}


export default IndexPage
