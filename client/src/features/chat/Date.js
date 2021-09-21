import React from 'react';
import styles from './Date.module.scss';

export function Date(props) {
    return (
        <div className={styles.date}>
            <div className={styles.text}>{props.date}</div>
        </div>
    )
}