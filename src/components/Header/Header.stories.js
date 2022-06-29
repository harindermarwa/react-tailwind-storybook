import React from "react";
import Header from "./Header";

export default {
    title: 'Home/Modal/Header',
    component: Header
}

const Template = args => <Header {...args}></Header>

export const HeaderSection = Template.bind({})

HeaderSection.args = {
   navs: ['Home']
}