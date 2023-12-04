import React from 'react'
import style from './Modal.module.css';

export default function Modal({ isActive, setIsActive, message = 'Action effectuée avec succées !', children = null, modalStyle = {} }) {
    const customStyle = modalStyle;

    if (isActive) {
        return (
            <div className={style.background}>
                <div className={style.modal} style={customStyle}>
                    {children ? children : <span className={style.message}>{message}</span>}
                    <button className={style.close} onClick={() => setIsActive(false)}>X</button>
                </div>
            </div>
        )

    }

    return (
        <div hidden></div>
    )

}
