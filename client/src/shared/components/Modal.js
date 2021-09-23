import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.scss';


export function Modal(props) {

    const [show, setShow] = useState(props.show || false);

    if (!show) return null;

    function onCloseClick() {
        setShow(false);
    }

    return createPortal(
        <div className={styles.modal}>
            <div className={styles.modalHeader}>
                <span onClick={onCloseClick} className={`material-icons ${styles.closeButton}`}>close</span>
            </div>
            <div className={styles.modalBody}>
                {props.children}
            </div>
            <div className={styles.modalFooter} />
        </div>,
        document.getElementById('app-modal')
    )
}