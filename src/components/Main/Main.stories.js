import React from "react";
import Main from "./Main";
import sideBarNavs from "../../metadata/sidebarData";

export default {
    title: 'Home/Modal',
    component: Main
}

const Template = args => <Main {...args}></Main>

export const MainSection = Template.bind({})

MainSection.args = {
    clickedNavItem: sideBarNavs[0]
}

MainSection.storyName = 'Main Seciton'