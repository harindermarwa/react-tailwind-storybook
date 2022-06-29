import React from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Home = (props) => {
    const [ showModal, setShowModal ] = useState(false);

    const handleModal = (show) => {
        setShowModal(show)
    }

    return (
        <>
         { showModal && <Modal onClick={setShowModal}/> }
        <Button label='Open Modal' backgroundColor='blue' onClick={handleModal}></Button> 
        </>
    )
}

export default Home;