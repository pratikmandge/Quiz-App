import React from 'react';

const Button = ({ children, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>

    );
};

export default Button;