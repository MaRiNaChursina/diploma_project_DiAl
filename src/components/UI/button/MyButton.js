import React from 'react';
import './MyButton.module.css';

const MyButton = ({children}) => {
    return (
        <button  className="MyButton" >
            {children}
        </button>
    );
};

export default MyButton;
