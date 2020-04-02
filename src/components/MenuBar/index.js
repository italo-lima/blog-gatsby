import React from "react"
import {MenuBarGroup, MenuBarItem, MenuBarLink, MenuBarWrapper} from "./styles"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

const MenuBar = ({changeBackground}) => (
    <MenuBarWrapper>
        {/* Group top */}
        <MenuBarGroup>
            <MenuBarLink to='/' title='Voltar para home'>
                <MenuBarItem> <Home /> </MenuBarItem>
            </MenuBarLink>
            <MenuBarLink to='/search' title='Pesquisar'>
                <MenuBarItem> <Search /> </MenuBarItem>
            </MenuBarLink>
            
        </MenuBarGroup>

        {/* Group bottom */}
        <MenuBarGroup>
            <MenuBarItem title='Mudar visualização'> <Grid /> </MenuBarItem>
            <MenuBarItem title='Ir para o top'> <Arrow /> </MenuBarItem>
        </MenuBarGroup>
    </MenuBarWrapper>
)

export default MenuBar