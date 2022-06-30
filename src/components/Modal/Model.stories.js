import React from "react";
import Modal from "../Modal/Modal";
import sideBarNavs from "../../metadata/sidebarData";

export default {
    title: "Home/Modal",
    component: Modal
}

const Template = args => <Modal {...args}></Modal>

export const ModalSection = Template.bind({});

ModalSection.args = {
    clickedNavItem: sideBarNavs[0],
    handleModal: () => {
        
    }
}

ModalSection.storyName = 'Modal View';