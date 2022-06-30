import React from "react";
import Header from "./Header";
import HeaderMenu from "../../Metadata/headerData";

export default {
    title: 'Home/Modal/Header',
    component: Header
}

const Template = args => <Header {...args}></Header>

export const HeaderSection = Template.bind({})

HeaderSection.args = {
   navs: HeaderMenu
}