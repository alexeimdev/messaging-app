import React, {useRef} from 'react';
import styles from './MessageInput.module.scss';

export function MessageInput(props) {

    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        inputRef.current.focus();
        if (inputRef.current.value) {
            props.onSubmit(inputRef.current.value, "me");
            inputRef.current.value = "";
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.messageInputForm}>
            <input ref={inputRef} className={styles.messageInput} placeholder="Message" />
            <div className={styles.spacer} />
            <button type="submit" value="" className={styles.submitButton} />
        </form>
    )
}