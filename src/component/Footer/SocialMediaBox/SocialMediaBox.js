import React, {Fragment} from 'react';
import styles from './SocialMediaBox.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const socialMediaBox = () => (
    <Fragment>
        <ul className={styles.SocialMediaBox_List}>
            <li>
                <a href="#" target='_blank'>Facebook</a>
            </li>
            <li>
                <a href="#" target='_blank'>Twitter</a>
            </li>
            <li>
                <a href="#" target='_blank'>Google+</a>
            </li>
        </ul>
    </Fragment>
)

export default socialMediaBox;