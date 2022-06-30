import React from 'react';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Home = (props) => {
    const [ showModal, setShowModal ] = useState(false);
    const { label = 'Open Modal', backgroundColor = 'blue', ...rest } = props;
    const handleModal = (show = false) => {
        setShowModal(show)
    }

    return (
        <>
        { showModal && <Modal onClick={setShowModal} handleModal={handleModal}/> }
        {!showModal 
        && 
        <button className={`bg-${backgroundColor}-500 hover:bg-${backgroundColor}-700 text-white font-bold py-2 px-4 rounded flex ${rest} cursor-pointer` } onClick={() => {
            (handleModal(true))
         }}>
             {label}
         </button>
        } 
        </>
    )
}

export default Home;