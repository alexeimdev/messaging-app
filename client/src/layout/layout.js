import React from 'react';
import styles from '../layout/layout.module.css';

export function Layout(props) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}></header>
            <main className={styles.main}>{props.children}</main>
            <footer className={styles.footer}></footer>
        </div>
    )
}