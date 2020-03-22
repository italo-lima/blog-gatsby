import React from "react"
import PropTypes from "prop-types"

import {
    PostItemDate, 
    PostItemDescription, 
    PostItemInfo, 
    PostItemLink, 
    PostItemTag,
    PostItemTitle,
    PostItemWrapper
} from "./styles" 

const PostItem = ({slug, description, title,category, background, timeToRead, date}) => (
    <PostItemLink to={slug}>
        <PostItemWrapper>
            <PostItemTag background={background}> {category} </PostItemTag>
            <PostItemInfo>
                <PostItemDate> {date} · {timeToRead} min de leitura </PostItemDate>
                <PostItemTitle>{title}</PostItemTitle>
                <PostItemDescription>
                    {description}
                </PostItemDescription>
            </PostItemInfo>
        </PostItemWrapper>
    </PostItemLink>
)

PostItem.protoTypes = {
    slug: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timeRead: PropTypes.string.isRequired,
    background: PropTypes.string,
}

export default PostItem