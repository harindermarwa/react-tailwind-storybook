import React from "react";
import Button from "../Button/Button";
import "../../index.css";

export default {
    title: 'Home',
    component: Button
}

const Template = args => <Button {...args}></Button>

export const ModalButton = Template.bind({})

ModalButton.args = {
    label: 'Open Modal',
    backgroundColor: 'blue'
}

ModalButton.storyName = 'Modal Open Button'