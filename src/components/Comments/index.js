import React from "react"
import ReactDisqusComments from 'react-disqus-comments';
import PropTypes from "prop-types"

import {CommentsWrapper, CommentsTitle} from "./styles"

const Comments = ({url, title}) => {
    const completeUrl = `http://localhost:8000${url}`
    return(
        <CommentsWrapper>
            <CommentsTitle>Comentários</CommentsTitle>
            <ReactDisqusComments
                shortname="italolima"
                identifier={completeUrl}
                title={title}
                url={completeUrl} />
        </CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

export default Comments