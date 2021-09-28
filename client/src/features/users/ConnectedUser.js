import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStoredUser, storeUser } from '../../utilities/localStorageUtility';
import { setUser } from './userSlice';
import styles from './ConnectedUser.module.scss';

export function ConnectedUser(props) {

    const dispatch = useDispatch();

    const userFromState = useSelector(state => state.user.user);
    const userFromStorage = getStoredUser();

    useEffect(() => {
        if (props.save && userFromStorage && !userFromState) {
            dispatch(setUser(userFromStorage))
        }
    }, [props.save, userFromState]);   

    function handleSelectUser(e) {
        const selectedUser = e.target.value;
        storeUser(selectedUser);
        dispatch(setUser(selectedUser));
    }

    return (
        <form className={styles.connectedUser}>
            {props.users?.map(user =>
                <div key={user} className={styles.userWrapper}>
                    <input type="radio" id={user} name="user" value={user} onInput={handleSelectUser} className={styles.radioInput} />
                    <label htmlFor={user}>{user}</label>
                </div>
            )}
        </form>
    )
}