import React from 'react';
import styles from './chatLayout.module.scss';

export function ChatLayout(props) {

    const headerShrink = !!props.headerSubTitle;

    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h1 className={`${styles.headerTitle} ${headerShrink ? styles.headerTitleShrink : ''}`}>{props.headerTitle}</h1>
                {props.headerSubTitle &&
                    <h2 className={styles.headerSubTitle}>{props.headerSubTitle}</h2>
                }
            </header>
            <main className={styles.main}>{props.children}</main>
            <footer className={styles.footer}></footer>
        </div>
    )
}