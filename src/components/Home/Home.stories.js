import React from "react";
import Home from "../Home/Home";
import "../../index.css";

export default {
    title: 'Home',
    component: Home
}

const Template = args => <Home {...args}></Home>

export const ModalButton = Template.bind({})

ModalButton.args = {
    label: 'Open Modal',
    backgroundColor: 'blue'
}

ModalButton.storyName = 'Modal Open Button'