import React from "react"
import {graphql, /*StaticQuery,*/ useStaticQuery} from 'gatsby'
import Avatar from "../../components/Avatar"

import {ProfileAuthor, 
        ProfileDescription, 
        ProfileLink, 
        ProfilePosition, 
        ProfileWrapper
    } from "./styles"

/* Usando useStaticQuery */
const Profile = () => {
    const query = graphql`
    query MySiteMetaData {
        site {
        siteMetadata {
            author
            description
            title
            position 
        }
        }
    }`
    const {site: {siteMetadata}} = useStaticQuery(query)

    return (
        <ProfileWrapper>
            <ProfileLink>
                <Avatar />
                <ProfileAuthor>
                    {siteMetadata.title}
                    <ProfilePosition>{siteMetadata.position}</ProfilePosition>
                </ProfileAuthor>
                
            </ProfileLink>
            <ProfileDescription>
                {siteMetadata.description}
            </ProfileDescription>
            
        </ProfileWrapper>
    )
}


/* Usando StaticQuery
const Profile = () => (
    <StaticQuery 
        query={query}
        render={({site: {siteMetadata}}) => (
            <div className="profile-wrapper">
                <h1>{siteMetadata.title}</h1>
                <h2>{siteMetadata.position}</h2>
                <p>
                    {siteMetadata.description}
                </p>
            </div>
        )}
    />
)

const query = graphql`
query MySiteMetaData {
    site {
      siteMetadata {
        author
        description
        title
        position
      }
    }
  }
`; */

export default Profile