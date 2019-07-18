import React from 'react';

import styles from './SignUp.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const signUp = () => (
    
    <div className={styles.SignupContainer}>
        <div className={styles.SignUp}>
            <form action="">
                <input type="text"/>
                <button><FontAwesomeIcon icon="envelope"/></button>
            </form>
            <p>Sign Up for News and Deals</p>
        </div>
    </div>
)

export default signUp;