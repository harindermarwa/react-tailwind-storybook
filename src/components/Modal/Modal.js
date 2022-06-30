import React, { useState } from "react";
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import sideBarNavs from "../../Metadata/sidebarData";
import HeaderMenu from "../../Metadata/headerData";
import PropTypes from 'prop-types';

const Modal = (props) => {
    const [clickedNavItem, setClickedNavItem] = useState(props.clickedNavItem);
    const { handleModal } = props;
    const onSideMenuClick = (menu) => {
        if (menu) setClickedNavItem(menu);
    }
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex h-screen">
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header navs={HeaderMenu} />
                    <div className="flex h-full">
                        <Sidebar navs={sideBarNavs} onSideMenuClick={onSideMenuClick}/>
                        <Main clickedNavItem={clickedNavItem}/>
                        <div>
                            <button className={`bg-gray-100 text-black font-bold py-2 px-4 rounded flex-left  cursor-pointer` } onClick={() => handleModal(false)}>
                            Back
                            </button>
                            <button className={`bg-green-100 text-black font-bold py-2 px-4 rounded flex-right  cursor-pointer`} onClick={() => handleModal(false)}>
                            Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Modal.propTypes = {
    handleModal: PropTypes.func
}

export default Modal;