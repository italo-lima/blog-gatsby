import React from "react"
import {graphql} from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

import {PostHeader, PostDate, PostTitle, PostDescription, MainContent} from "../styles/post"

const BlogPost = ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
          <SEO title={post.frontmatter.title} />
            <PostHeader>
              <PostDate>
                {post.frontmatter.date} · {post.timeToRead} min de leitura
              </PostDate>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <PostDescription>{post.frontmatter.description}</PostDescription>
            </PostHeader>
            <MainContent>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </MainContent>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
      }
    }
  }
`

export default BlogPost