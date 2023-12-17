import React from 'react'
import './Badge.css'

function Badge({icon, text , count}) {
    return (
        <div className="badge-container">
            <div className="badge">
                <i className={icon}></i>
                <h2>{text}</h2>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default Badge