import React from 'react';
import styles from './chatLayout.module.scss';

export function ChatLayout(props) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>{props.headerTitle}</h1>
            </header>
            <main className={styles.main}>{props.children}</main>
            <footer className={styles.footer}></footer>
        </div>
    )
}