import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';
import SignUp from './SignUp/Signup';

import styles from './Footer.module.css';

const footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.Box}>
            <SignUp/>
            <NavigationItems name={'Menu'}/>
        </div>
        <p className={styles.BottomText}>
            &copy; 2018 Billie Tran Webdesign
        </p>
    </footer>
)

export default footer;