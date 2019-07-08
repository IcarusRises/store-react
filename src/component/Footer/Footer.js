import React from 'react';
import NavigationItems from '../Footer/NavigationItems/NavigationItems';

import styles from './Footer.module.css';

const footer = () => (
    <footer>
        <div className={styles.footer}>
            <NavigationItems/>
        </div>
    </footer>
)

export default footer;