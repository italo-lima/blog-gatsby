import React from "react"
import {menuLinks} from "./content"

import {MenuLinksItem,MenuLinksList,MenuLinksLink, MenuWrapper} from "./styles"

const Menu = () => (
    <MenuWrapper>
        <MenuLinksList>
            {menuLinks.map((link,i) => (
                <MenuLinksItem key={i}>
                    <MenuLinksLink to={link.url} activeClassName='active'>
                        {link.label}
                    </MenuLinksLink>
                </MenuLinksItem>
            ))}
        </MenuLinksList>
    </MenuWrapper>
)

export default Menu