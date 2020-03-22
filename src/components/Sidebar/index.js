import React from "react"
import {SidebarWrapper} from "./styles"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import Menu from "../Menu"


const Sidebar = () => (
    <SidebarWrapper>
        <Profile />
        <SocialLinks />
        <Menu />
    </SidebarWrapper>
    )

export default Sidebar