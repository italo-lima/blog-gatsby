import React from "react"
import {graphql} from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const BlogPost = props => {
    const postList = props.data.allMarkdownRemark.edges

    const {currentPage, numPages} = props.pageContext
    const firstPage = currentPage === 1
    const lastPage = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`

    return (
        <Layout>
            <SEO title="Home" />
            {postList && 
              <>
              {postList.map(({node:{
                frontmatter, 
                timeToRead, 
                fields,
                id
              }}) => (
                <PostItem key={id}
                    background={frontmatter.background}
                    slug={fields.slug}
                    category={frontmatter.category}
                    date={frontmatter.date}
                    timeToRead={timeToRead}
                    title={frontmatter.title}
                    description={frontmatter.description}
                />
            ))}

            <Pagination 
                isFirst={firstPage} 
                isLast={lastPage} 
                currentPage={currentPage} 
                numPages={numPages} 
                prevPage={prevPage} 
                nextPage={nextPage} 
              />
              </>
          }
        </Layout>
    )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: {order: DESC, fields: frontmatter___date}
        limit: $limit, skip: $skip
        ) {
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
            id
          }
        }
      }
  }
`

export default BlogPost