import React from 'react';
import CardGenerator  from '../../container/CardGenerator/CardGenerator';

import styles from './Store.module.css';

const store = () => (
    <div className={styles.Center}>
        <div className={styles.Store}>
            <CardGenerator/>
        </div>
    </div>
)


export default store;