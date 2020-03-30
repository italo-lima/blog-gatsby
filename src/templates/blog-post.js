import React from "react"
import {graphql} from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import RecommendedPost from "../components/RecommendedPost"

import {PostHeader, PostDate, PostTitle, PostDescription, MainContent} from "../styles/post"

const BlogPost = ({data, pageContext}) => {
    const post = data.markdownRemark
    const next = pageContext.nextPost
    const previous = pageContext.previousPost

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
            <RecommendedPost next={next} previous={previous}/>
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