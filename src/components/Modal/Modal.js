import React from "react";
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";

const Modal = (props) => {
    const HedaerOptions = ['Favourites'];
    const sideBarOptions = ['ABS', 'DISTANCE', 'TRAVELTIME'];
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
           
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Header navs={HedaerOptions}/>
                <Sidebar navs={sideBarOptions}/>
                </div>
            </div>
        </div>
    )
}

export default Modal;