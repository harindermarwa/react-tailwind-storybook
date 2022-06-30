import React, { useEffect, useRef, useState } from "react";
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import sideBarNavs from "../../metadata/sidebarData";
import HeaderMenu from "../../metadata/headerData";
import PropTypes from 'prop-types';
import { useOutsideClick } from "../../directives/outsideclick.directive";


const Modal = (props) => {
    const [clickedNavItem, setClickedNavItem] = useState(props.clickedNavItem);
    const { handleModal } = props;
    const onSideMenuClick = (menu) => {
        if (menu) setClickedNavItem(menu);
    }
    let modalRef = useRef(null)
    useOutsideClick(modalRef, handleModal);
    return (
        // <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        //     <div className="flex h-screen">
        //         <div className="flex-1 flex flex-col overflow-hidden">
        //             <Header navs={HeaderMenu} />
        //             <div className="flex h-full">
        //                 <Sidebar navs={sideBarNavs} onSideMenuClick={onSideMenuClick}/>
        //                 <Main clickedNavItem={clickedNavItem}/>
        //                 <div>
        //                     <button className={`bg-gray-100 text-black font-bold py-2 px-4 rounded flex-left  cursor-pointer` } onClick={() => handleModal(false)}>
        //                     Back
        //                     </button>
        //                     <button className={`bg-green-100 text-black font-bold py-2 px-4 rounded flex-right  cursor-pointer`} onClick={() => handleModal(false)}>
        //                     Submit
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="wrapper " ref={modalRef}>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-sm">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Modal Title
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => handleModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    I always felt like I could do anything. That’s the main
                                    thing people are controlled by! Thoughts- their perception
                                    of themselves! They're slowed down by their perception of
                                    themselves. If you're taught you can’t do anything, you
                                    won’t do anything. I was taught I could do everything.
                                </p>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-gray-500 text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                                    type="button"
                                    onClick={() => handleModal(false)}
                                >
                                    Back
                                </button>
                                <button
                                    className="bg-green-500 text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                                    type="button"
                                    onClick={() => handleModal(false)}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

Modal.propTypes = {
    handleModal: PropTypes.func
}

export default Modal;