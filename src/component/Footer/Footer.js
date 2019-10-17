import React from 'react';
import SocialMediaBox from './SocialMediaBox/SocialMediaBox';
import NavigationItems from './NavigationItems/NavigationItems';
import SignUp from '../../container/SignUp/Signup';
import styles from './Footer.module.css';

const footer = () => (
    <footer className={styles.Footer}>
        <div className={styles.Box}>
            <SignUp/>
        </div>
        <div className={styles.Footer_Bottom_Links}>
            <div className={styles.MenuBox}>
                <NavigationItems/>
            </div>
            <div className={styles.SocialMediaBox}>
                <SocialMediaBox/>
            </div>
        </div>
        <p className={styles.BottomText}>
            &copy; 2018 Billie Tran Webdesign
        </p>
    </footer>
)

export default footer;