import React from 'react';

import styles from './SignUp.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const signUp = () => (
    
    <div className={styles.SignupContainer}>
        <div className={styles.SignUp}>
            <p className={styles.Signup_CTA}>Sign Up for News and Deals</p>
            <form className={styles.center}>
                <input type="text"/>
                <button><FontAwesomeIcon icon="envelope"/></button>
            </form>
        </div>
    </div>
)

export default signUp;