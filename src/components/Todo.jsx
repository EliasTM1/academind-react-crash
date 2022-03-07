import React, { useState } from "react";
// * Components
import Backdrop from './Backdrop'
import Modal from './Modal'

const Todo = ({ title }) => {
    //  * set the initial state
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    const deleteHandler = () => {
        setmodalIsOpen(true);
    };

    const hideModal = () => {
        setmodalIsOpen(false);
    };
    
return (
    <div className="card">
        <h2>{title}</h2>
        <div className="actions">
            <button onClick={deleteHandler} className="btn">
                Delete
            </button>
        </div>
        {/* We could use a ternary operator to render our element if truth otherwise we render null */}
        {/* {modalIsOpen ? <Modal/>:null} */}
        {/* Intead we can use a && operator, if the 2 are truth the second value gets rendered */}
        {modalIsOpen && <Modal onCancel={hideModal}/>}
        {modalIsOpen && <Backdrop onCancel={hideModal}/>}
        
    </div>
);
};

export default Todo;
