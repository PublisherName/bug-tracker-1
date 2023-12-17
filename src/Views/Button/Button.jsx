
import React from 'react';
import './Button.css';

function Button(props){
    const { className, title, onClick } = props;

    return(
        <button className={className} onClick={onClick} title={title}>
            {title}
        </button>
    );
}
export default Button;