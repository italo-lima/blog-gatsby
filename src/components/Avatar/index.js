import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {AvatarWrapper} from "./styles"

const Avatar = () => {
    const query = graphql`
        {
            avatarImage: file(relativePath:{eq:"profile.jpg"}){
                childImageSharp{
                    fixed(width:60, height: 60){
                        ...GatsbyImageSharpFixed_tracedSVG
                    }
                }
            }
        }
    `;
    const {avatarImage:{childImageSharp}} = useStaticQuery(query) 

    return <AvatarWrapper fixed={childImageSharp.fixed} style={{width: '60px'}}/>    
}

export default Avatar