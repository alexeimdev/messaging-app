import React, { useRef, useState } from 'react';
import styles from './MessageInput.module.scss';

export function MessageInput(props) {

    const inputRef = useRef();
    const [message, setMessage] = useState('');

    function handleInputChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        inputRef.current.focus();
        if (message) {
            props.onSubmit(message);
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.messageInputForm}>
            <input ref={inputRef} value={message} onChange={handleInputChange} className={styles.messageInput} placeholder="Message" />
            <div className={styles.spacer} />
            <button type="submit" value="" className={styles.submitButton}>
                <span className="material-icons">{message ? 'send' : 'mic'}</span>
            </button>
        </form>
    )
}