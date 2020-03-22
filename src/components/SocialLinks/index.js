import React from "react"
import {icons, links} from "./Icons"

import {SocialLinksItem, SocialLinksList, IconWrapper, SocialLinksLink, SocialLinksWrapper} from "./styles"

const SocialLinks = () => (
    <SocialLinksWrapper>
        <SocialLinksList>
            {links.map((link,i) => {
                const Icon = icons[link.label]
                return(
                    <SocialLinksItem key={i}>
                        <SocialLinksLink 
                            href={link.url} 
                            title={link.label} 
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <IconWrapper>
                                <Icon />
                            </IconWrapper>
                        </SocialLinksLink>
                    </SocialLinksItem>
                )
            })}
        </SocialLinksList>
    </SocialLinksWrapper>
)

export default SocialLinks