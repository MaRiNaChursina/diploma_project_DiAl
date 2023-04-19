import React from "react";
import './Modal.css';
import {SlClose} from "react-icons/sl"

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active? "modal active": "modal"}  onClick={() => setActive(false)}>
            <div className={active? "modal__content active": "modal"}  onClick={e => e.stopPropagation()}>
                <SlClose className={active? "modal__content-close": "modal"} onClick={() => setActive(false)}/>
                {children}
            </div>
        </div>
    )
};

export default Modal;