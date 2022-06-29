import React from "react";
import Modal from "../Modal/Modal";

export default {
    title: "Home/Modal",
    component: Modal
}

const Template = args => <Modal {...args}></Modal>

export const ModalSection = Template.bind({});

ModalSection.storyName = 'Modal View'