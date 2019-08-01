import React from 'react';

import Background from '../BackgroundContainer/Background';
import CardGenerator  from '../../container/CardGenerator/CardGenerator';

import styles from './Store.module.css';

const store = () => (
    <div>
        <Background/>
        <div className={styles.Center}>
            <div className={styles.Store}>
                <CardGenerator/>
            </div>
        </div>
    </div>
)


export default store;