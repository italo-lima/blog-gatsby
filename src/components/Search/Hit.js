import React from "react"
import PostItem from "../PostItem"

const Hit = ({hit}) => (
     <PostItem 
        background={hit.background}
        slug={hit.fields.slug}
        title={hit.title}
        date={hit.date}
        description={hit.description}
        category={hit.category}
        
    />
)

export default Hit