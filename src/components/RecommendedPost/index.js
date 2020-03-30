import React from "react"
import PropTypes from "prop-types"
import {RecommendedWrapper, RecommendedLink} from "./styles"

const RecommendedPost = ({next, previous}) => (
    <RecommendedWrapper>
        {previous && (
            <RecommendedLink to={previous.fields.slug} className="previous">
                {previous.frontmatter.title}
            </RecommendedLink>
        )}

        {next && (
            <RecommendedLink to={next.fields.slug} className="next">
                {next.frontmatter.title}
            </RecommendedLink>
        )}
    </RecommendedWrapper>
)

RecommendedPost.propTypes = {
    next: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }),
    }),
    previous: PropTypes.shape({
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }),
    })
}

export default RecommendedPost