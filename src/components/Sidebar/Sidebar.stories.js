import React from "react";
import Sidebar from "./Sidebar";

export default {
    title: 'Home/Modal/Sidebar',
    component: Sidebar
}

const Template = args => <Sidebar {...args}></Sidebar>

export const SidebarSection = Template.bind({})

SidebarSection.args = {
   navs: ['ABS', 'DISTANCE', 'TRAVELTIME']
}